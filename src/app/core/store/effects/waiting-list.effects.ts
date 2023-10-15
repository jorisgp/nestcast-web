import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WaitingListConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import * as waitingListActions from '../actions/waiting-list.actions';

@Injectable()
export class WaitingListEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService
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
            map((result) => waitingListActions.confirmWaitingList(result)),
            catchError((error) =>
              of(waitingListActions.confirmWaitingListFailure(error))
            )
          )
      )
    )
  );
}
