import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  LocalStorageService,
  StorageKey,
} from '../../services/local-storage.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import * as authActions from '../actions/auth.actions';
import { signInFailure, signInSuccess } from '../actions/auth.actions';
@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signIn),
      switchMap((action) =>
        this.nestastHttpService.postAuthLogin(action.data).pipe(
          tap((result) =>
            this.localStorageService.setItem(StorageKey.AUTH_TOKEN, result)
          ),
          map((token) => signInSuccess(token)),
          catchError((error) => of(signInFailure(error)))
        )
      )
    )
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signInSuccess),
        tap(() => this.router.navigate(['/', 'admin']))
      ),
    { dispatch: false }
  );

  signUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signUp),
        switchMap((action) =>
          this.nestastHttpService.postUsers(action.data).pipe(
            tap(
              (res) => !!res.id && this.router.navigateByUrl('/auth/sign-in')
            ),
            catchError((error) => throwError(error))
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private nestastHttpService: NestcastHttpService,
    private localStorageService: LocalStorageService
  ) {}
}
