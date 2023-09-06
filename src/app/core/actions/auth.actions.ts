import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[SignIn] User SignIn',
  props<{ username: string; password: string }>()
);

export const signInSuccess = createAction(
  '[SignIn] SignIn Success',
  props<{ token: string }>()
);

export const signInFailure = createAction(
  '[SignIn] SignIn Failure',
  props<{ error: string }>()
);
