import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import {
  LocalStorageService,
  StorageKey,
} from '../../services/local-storage.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private languageService: LanguageService,
    private localStorageService: LocalStorageService
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

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserSignUpSuccess),
        tap(() => this.router.navigate(['/', 'auth', 'sign-in']))
      ),
    { dispatch: false }
  );

  signUpError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserSignUpError),
        tap(() =>
          this.notificationService.showWarn(
            this.languageService.getTranslation('AUTH.SIGN_UP.ERROR.title'),
            this.languageService.getTranslation('AUTH.SIGN_UP.ERROR.text')
          )
        )
      ),
    { dispatch: false }
  );

  requestConfirmationCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserRequestConfirmationCode),
      mergeMap((action) =>
        this.nestcastHttpService.putUsersConfirmation().pipe(
          map((user) => userActions.UserRequestConfirmationCodeSuccess(null)),
          catchError((error) =>
            of(userActions.UserRequestConfirmationCodeError(error))
          )
        )
      )
    )
  );

  userConfirmUsername$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserConfirmUsername),
      mergeMap((action) =>
        this.nestcastHttpService
          .putUsersConfirmation(action.payload.confirmationCode)
          .pipe(
            map((user) => userActions.UserConfirmUsernameSuccess(null)),
            catchError((error) =>
              of(userActions.UserConfirmUsernameError(error))
            )
          )
      )
    )
  );

  UserConfirmUsernameError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserConfirmUsernameError),
        tap(() =>
          this.notificationService.showWarn(
            this.languageService.getTranslation(
              'USER.CONFIRM_USERNAME.ERROR.title'
            ),
            this.languageService.getTranslation(
              'USER.CONFIRM_USERNAME.ERROR.text'
            )
          )
        )
      ),
    { dispatch: false }
  );

  userConfirmUsernameSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserConfirmUsernameSuccess),
        tap(() => this.localStorageService.removeItem(StorageKey.AUTH_TOKEN)),
        tap(() =>
          this.notificationService.showSuccess('Success', 'User confirmed')
        ),
        tap(() => this.router.navigate(['/', 'auth', 'sign-in']))
      ),
    { dispatch: false }
  );

  UserPasswordRequestReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserPasswordRequestReset),
      mergeMap((action) =>
        this.nestcastHttpService
          .putUsersPassword({ username: action.payload.username })
          .pipe(
            map((user) => userActions.UserRequestConfirmationCodeSuccess(null)),
            catchError((error) =>
              of(userActions.UserRequestConfirmationCodeError(error))
            )
          )
      )
    )
  );

  UserPasswordReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserPasswordReset),
      mergeMap((action) =>
        this.nestcastHttpService.putUsersPassword(action.payload).pipe(
          map((user) => userActions.UserPasswordResetSuccess(null)),
          catchError((error) => of(userActions.UserPasswordResetError(error)))
        )
      )
    )
  );
}
