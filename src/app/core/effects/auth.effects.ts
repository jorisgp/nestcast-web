import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { signInFailure, signInSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      tap((result) => console.log(result)),
      ofType('[SignIn] User SignIn'),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map((token) => signInSuccess({ token })),
          catchError((error) => of(signInFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
