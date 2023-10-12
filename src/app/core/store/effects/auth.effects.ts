import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  LocalStorageService,
  StorageKey,
} from '../../services/local-storage.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { signIn, signInFailure, signInSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private localStorageService: LocalStorageService
  ) {}

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap((action) =>
        this.nestcastHttpService.postAuthLogin(action.payload).pipe(
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
        ofType(signInSuccess),
        tap(() => this.router.navigate(['/', 'admin']))
      ),
    { dispatch: false }
  );
}
