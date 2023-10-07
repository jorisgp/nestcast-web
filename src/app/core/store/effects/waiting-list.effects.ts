import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
      mergeMap((action) =>
        this.nestcastHttpService.postWaitingList(action.payload).pipe(
          map((result) => waitingListActions.addToWaitingListSuccess(result)),
          catchError((error) =>
            of(waitingListActions.addToWaitingListFailure(error))
          )
        )
      )
    )
  );
}