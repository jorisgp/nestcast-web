import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  LocalStorageService,
  StorageKey,
} from '../../services/local-storage.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { signInFailure, signInSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[SignIn] User SignIn'),
      switchMap(({ username, password }) =>
        this.nestastHttpService.postAuthLogin({ username, password }).pipe(
          tap((result) =>
            this.localStorageService.setItem(StorageKey.AUTH_TOKEN, result)
          ),
          map((token) => signInSuccess({ token })),
          catchError((error) => of(signInFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private nestastHttpService: NestcastHttpService,
    private localStorageService: LocalStorageService
  ) {}
}
