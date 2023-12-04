import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
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
    private modalService: ModalService
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
}
