import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ContactConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as contactConfirmationActions from '../actions/contact-confirmation.actions';

@Injectable()
export class ContactConfirmationEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private modalService: ModalService,
    private languageService: LanguageService
  ) {}

  confirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactConfirmationActions.confirmContact),
      switchMap((action) =>
        this.nestcastHttpService
          .patchContact(action.payload.id, action.payload.confirmationCode, {
            confirmed: action.payload.confirmed,
          } as ContactConfirmation)
          .pipe(
            map((result) =>
              contactConfirmationActions.confirmContactSuccess(result)
            ),
            catchError((error) =>
              of(contactConfirmationActions.confirmContactFailure(error))
            )
          )
      )
    )
  );

  confirmSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactConfirmationActions.confirmContactSuccess),
        tap(() => {
          this.notificationService.showSuccess(
            this.languageService.getTranslation('CONTACT.SUCCESSMESSAGE.title'),
            this.languageService.getTranslation('CONTACT.SUCCESSMESSAGE.text')
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );

  confirmError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactConfirmationActions.confirmContactFailure),
        tap(() => {
          this.notificationService.showWarn(
            this.languageService.getTranslation('CONTACT.ERRORMESSAGE.title'),
            this.languageService.getTranslation('CONTACT.ERRORMESSAGE.text')
          );
        })
      ),
    { dispatch: false }
  );
}
