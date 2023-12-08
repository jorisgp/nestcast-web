import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as waitingListActions from '../actions/waiting-list.actions';

@Injectable()
export class WaitingListEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private modalService: ModalService,
    private languageService: LanguageService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(waitingListActions.addToWaitingList),
      switchMap((action) =>
        this.nestcastHttpService.postWaitingList(action.payload).pipe(
          map((result) =>
            waitingListActions.addToWaitingListSuccess({ payload: result })
          ),
          catchError((error) =>
            of(waitingListActions.addToWaitingListFailure(error))
          )
        )
      )
    )
  );

  contactError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(waitingListActions.addToWaitingListFailure),
        tap(() => {
          this.notificationService.showWarn(
            this.languageService.getTranslation('WAITINGLIST.ERRORMESSAGE')
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );
}
