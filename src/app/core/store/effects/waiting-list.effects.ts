import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as waitingListActions from '../actions/waiting-list.actions';

@Injectable()
export class WaitingListEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private modalService: ModalService
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
}
