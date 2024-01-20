import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import {
  FileReference,
  FileReferenceResponse,
} from 'src/app/shared/interfaces/auth.interface';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import {
  createShow,
  createShowError,
  createShowSuccess,
  deleteShowImage,
  fetchShow,
  fetchShowSuccess,
  updateShow,
  uploadShowImage,
  uploadShowImageError,
  uploadShowImageSuccess,
} from '../actions/show.actions';

@Injectable()
export class ShowEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private languageService: LanguageService,
    private modalService: ModalService,
    private router: Router
  ) {}

  createShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createShow),
      mergeMap((action) =>
        this.nestcastHttpService.postShows(action.payload).pipe(
          map((show) => createShowSuccess(show)),
          catchError((error) => of(createShowError(error)))
        )
      )
    )
  );

  createShowError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createShowError),
        tap(() => {
          this.notificationService.showWarn(
            this.languageService.getTranslation('HOME.CONTACT.ERRORMESSAGE')
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );

  createShowSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createShowSuccess),
        tap(() => this.router.navigate(['/', 'secure', 'manager']))
      ),
    { dispatch: false }
  );

  fetchShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchShow),
      mergeMap(() =>
        this.nestcastHttpService.getShowsMine().pipe(
          map((result) => fetchShowSuccess({ payload: result })),
          catchError((error) => of(createShowError(error)))
        )
      )
    )
  );

  fetchShowSuccess$ = createEffect(
    () => this.actions$.pipe(ofType(fetchShowSuccess)),
    { dispatch: false }
  );

  updateShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateShow),
      mergeMap((action) =>
        this.nestcastHttpService.patchShows(action.showId, action.payload).pipe(
          map((show) => createShowSuccess(show)),
          catchError((error) => of(createShowError(error)))
        )
      )
    )
  );

  deleteShowImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteShowImage),
      mergeMap((action) =>
        this.nestcastHttpService.putShowsImage(action.showId, null).pipe(
          map((show) => uploadShowImageSuccess({ payload: show })),
          catchError((error) => of(uploadShowImageError(error)))
        )
      )
    )
  );

  uploadShowImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadShowImage),
      mergeMap((action) =>
        this._uploadFile(action.fileDetails, action.payload).pipe(
          switchMap((fileReference) =>
            this.nestcastHttpService
              .patchShows(action.showId, {
                image: fileReference.id,
              })
              .pipe(map((show) => uploadShowImageSuccess({ payload: show })))
          ),
          catchError((error) => of(uploadShowImageError(error)))
        )
      )
    )
  );

  private _uploadFile(
    fileDetails: FileReference,
    file: File
  ): Observable<FileReferenceResponse> {
    return this.nestcastHttpService
      .postFileReference(fileDetails)
      .pipe(
        switchMap((fileReference) =>
          this.nestcastHttpService
            .putFile(fileReference.url, file)
            .pipe(map(() => fileReference))
        )
      );
  }
}
