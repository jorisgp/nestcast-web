import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import {
  createShow,
  createShowError,
  createShowSuccess,
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

  uploadShowImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadShowImage),
      mergeMap((action) =>
        this.nestcastHttpService
          .putShowsImage(action.showId, action.payload)
          .pipe(
            map((show) => uploadShowImageSuccess(show)),
            catchError((error) => of(uploadShowImageError(error)))
          )
      )
    )
  );
}
