import { createAction, props } from '@ngrx/store';
import { Login, Token } from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';

const TYPE = '[Auth]';

export const signIn = createAction(
  `${TYPE} User SignIn`,
  props<{ payload: Login }>()
);

export const signInSuccess = createAction(
  `${TYPE} SignIn Success`,
  props<{ payload: Token }>()
);

export const signInFailure = createAction(
  `${TYPE} SignIn Failure`,
  props<{ payload: Error }>()
);

export const signUp = createAction(
  `${TYPE} User SignUp`,
  props<{ payload: Login }>()
);

export const signUpSuccess = createAction(
  `${TYPE} SignUp Success`,
  props<{ payload: Token }>()
);

export const signUpFailure = createAction(
  `${TYPE} SignUp Failure`,
  props<{ payload: Error }>()
);

export const signOut = createAction('[SignIn] User SignOut');
