import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContactConfirmation } from 'src/app/shared/interfaces/auth.interface';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import * as contactActions from '../actions/contact.actions';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService
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
}
