import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as contactActions from '../actions/contact.actions';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private languageService: LanguageService,
    private modalService: ModalService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActions.addToContact),
      switchMap((action) =>
        this.nestcastHttpService.postContact(action.payload).pipe(
          map((result) =>
            contactActions.addToContactSuccess({ payload: result })
          ),
          catchError((error) => of(contactActions.addToContactFailure(error)))
        )
      )
    )
  );

  contactError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactActions.addToContactFailure),
        tap(() => {
          this.notificationService.showWarn(
            this.languageService.getTranslation('HOME.CONTACT.ERRORMESSAGE')
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );
}
