import { createAction, props } from '@ngrx/store';

export const createUser = createAction(
  '[New] User',
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
