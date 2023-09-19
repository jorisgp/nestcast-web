import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserSignUp),
      mergeMap((action) =>
        this.nestastHttpService.postUsers(action.payload).pipe(
          map((user) => userActions.UserSignUpSuccess(user)),
          catchError((error) => of(userActions.UserSignUpEror(error)))
        )
      )
    )
  );

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserSignUpSuccess),
        tap(() => this.router.navigate(['/', 'auth', 'sign-in']))
      ),
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private nestastHttpService: NestcastHttpService
  ) {}
}
