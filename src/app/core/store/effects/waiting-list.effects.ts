import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { WaitingListConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as waitingListActions from '../actions/waiting-list.actions';

@Injectable()
export class WaitingListEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService
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

  confirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(waitingListActions.confirmWaitingList),
      switchMap((action) =>
        this.nestcastHttpService
          .patchWaitingList(
            action.payload.id,
            action.payload.confirmationCode,
            { confirmed: action.payload.confirmed } as WaitingListConfirmation
          )
          .pipe(
            map((result) =>
              waitingListActions.confirmWaitingListSuccess(result)
            ),
            catchError((error) =>
              of(waitingListActions.confirmWaitingListFailure(error))
            )
          )
      )
    )
  );

  confirmSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(waitingListActions.confirmWaitingListSuccess),
        tap(() =>
          this.notificationService.showSuccess(
            'Success',
            'You have been added to the waiting list!'
          )
        )
      ),
    { dispatch: false }
  );
}
