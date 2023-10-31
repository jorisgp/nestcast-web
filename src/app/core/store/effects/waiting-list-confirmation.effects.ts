import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { WaitingListConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { ModalService } from 'src/app/shared/services/modal.service';
import { LanguageService } from '../../services/language.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as waitingListConfirmationActions from '../actions/waiting-list-confirmation.actions';

@Injectable()
export class WaitingListConfirmationEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private modalService: ModalService,
    private languageService: LanguageService
  ) {}

  confirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(waitingListConfirmationActions.confirmWaitingList),
      switchMap((action) =>
        this.nestcastHttpService
          .patchWaitingList(
            action.payload.id,
            action.payload.confirmationCode,
            { confirmed: action.payload.confirmed } as WaitingListConfirmation
          )
          .pipe(
            map((result) =>
              waitingListConfirmationActions.confirmWaitingListSuccess(result)
            ),
            catchError((error) => {
              return of(
                waitingListConfirmationActions.confirmWaitingListFailure(error)
              );
            })
          )
      )
    )
  );

  confirmSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(waitingListConfirmationActions.confirmWaitingListSuccess),
        tap(() => {
          this.notificationService.showSuccess(
            this.languageService.getTranslation(
              'WAITINGLIST.SUCCESSMESSAGE.title'
            ),
            this.languageService.getTranslation(
              'WAITINGLIST.SUCCESSMESSAGE.text'
            )
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );

  confirmError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(waitingListConfirmationActions.confirmWaitingListFailure),
        tap(() =>
          this.notificationService.showWarn(
            this.languageService.getTranslation(
              'WAITINGLIST.ERRORMESSAGE.title'
            ),
            this.languageService.getTranslation('WAITINGLIST.ERRORMESSAGE.text')
          )
        )
      ),
    { dispatch: false }
  );
}
