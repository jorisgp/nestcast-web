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
import { signIn, signInFailure, signInSuccess } from '../actions/auth.actions';

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
          tap((result) => {
            if (result.activated === false) {
              this.router.navigate(['/', 'auth', 'activate']);
              this.stopSignal$.next(null);
            } else {
              this.localStorageService.setItem(
                StorageKey.AUTH_TOKEN,
                result.accessToken
              );
            }
          }),
          map((result) => signInSuccess(result.accessToken)),
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

  signInError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInFailure),
        tap(() =>
          this.notificationService.showWarn(
            this.languageService.getTranslation('AUTH.SIGN_IN.ERROR.title'),
            this.languageService.getTranslation('AUTH.SIGN_IN.ERROR.text')
          )
        )
      ),
    { dispatch: false }
  );
}
