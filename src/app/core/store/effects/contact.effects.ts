import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ContactConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as contactActions from '../actions/contact.actions';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService
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

  confirm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActions.confirmContact),
      switchMap((action) =>
        this.nestcastHttpService
          .patchContact(action.payload.id, action.payload.confirmationCode, {
            confirmed: action.payload.confirmed,
          } as ContactConfirmation)
          .pipe(
            map((result) => contactActions.confirmContact(result)),
            catchError((error) =>
              of(contactActions.confirmContactFailure(error))
            )
          )
      )
    )
  );

  confirmSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactActions.confirmContactSuccess),
        tap(() =>
          this.notificationService.showSuccess(
            'Success',
            'Your message has been sent and confirmed!'
          )
        )
      ),
    { dispatch: false }
  );

  confirmError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(contactActions.confirmContactFailure),
        tap(() =>
          this.notificationService.showWarn(
            'Failed',
            'Jouw contactpoging kon niet bevestigd worden, probeer het opnieuw.'
          )
        )
      ),
    { dispatch: false }
  );
}
