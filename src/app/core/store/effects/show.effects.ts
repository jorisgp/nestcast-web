import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService
  ) {}

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserSignUp),
      mergeMap((action) =>
        this.nestcastHttpService.postUsers(action.payload).pipe(
          map((user) => userActions.UserSignUpSuccess(user)),
          catchError((error) => of(userActions.UserSignUpError(error)))
        )
      )
    )
  );
}
