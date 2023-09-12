import { createAction, props } from '@ngrx/store';
import {
  Login,
  PasswordReset,
  PasswordResetRequest,
  Token,
} from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';
import { User } from 'src/app/shared/interfaces/user.interface';

const TYPE = '[Auth]';

export const signIn = createAction(
  `${TYPE} User SignIn`,
  props<{ data: Login }>()
);

export const signInSuccess = createAction(
  `${TYPE} SignIn Success`,
  props<{ data: Token }>()
);

export const signInFailure = createAction(
  `${TYPE} SignIn Failure`,
  props<{ data: Error }>()
);

export const signUp = createAction(
  `${TYPE} User SignUp`,
  props<{ data: User }>()
);

export const requestPasswordReset = createAction(
  `${TYPE} Request Password Reset`,
  props<{ data: PasswordResetRequest }>()
);

export const passwordReset = createAction(
  `${TYPE} Request Password Reset`,
  props<{ data: PasswordReset }>()
);

export const signOut = createAction('[SignIn] User SignOut');
