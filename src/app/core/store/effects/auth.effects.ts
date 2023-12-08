import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Subject, of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import {
  LocalStorageService,
  StorageKey,
} from '../../services/local-storage.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import {
  signIn,
  signInFailure,
  signInSuccess,
  signInSuccessNotActivated,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  private stopSignal$ = new Subject();

  constructor(
    private router: Router,
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private languageService: LanguageService
  ) {}

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap((action) =>
        this.nestcastHttpService.postAuthLogin(action.payload).pipe(
          takeUntil(this.stopSignal$),
          tap((result) =>
            this.localStorageService.setItem(
              StorageKey.AUTH_TOKEN,
              result.accessToken
            )
          ),
          map((result) => {
            if (result.activated) {
              return signInSuccess(result.accessToken);
            } else {
              return signInSuccessNotActivated(result.accessToken);
            }
          }),
          catchError((error) => of(signInFailure(error)))
        )
      )
    )
  );

  signInSuccessNotActivated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInSuccessNotActivated),
        tap(() => this.router.navigate(['/', 'auth', 'activate']))
      ),
    { dispatch: false }
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInSuccess),
        tap(console.log),
        tap(() => this.router.navigate(['/', 'manager']))
      ),
    { dispatch: false }
  );

  signInError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInFailure),
        tap(() =>
          this.notificationService.showWarn(
            this.languageService.getTranslation('AUTH.SIGN_IN.ERROR')
          )
        )
      ),
    { dispatch: false }
  );
}
