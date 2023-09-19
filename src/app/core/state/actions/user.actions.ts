import { createAction, props } from '@ngrx/store';
import {
  PasswordRequestReset,
  PasswordReset,
} from 'src/app/shared/interfaces/auth.interface';
import { User } from 'src/app/shared/interfaces/user.interface';

const TYPE = '[User]';

export const UserPasswordRequestReset = createAction(
  `${TYPE} Password Request Reset`,
  props<{ payload: PasswordRequestReset }>()
);

export const UserPasswordRequestResetError = createAction(
  `${TYPE} Password Request Reset Error`,
  props<{ payload: PasswordRequestReset }>()
);

export const UserPasswordRequestResetSuccess = createAction(
  `${TYPE} Password Request Reset Success`,
  props<{ payload: PasswordRequestReset }>()
);

export const UserPasswordReset = createAction(
  `${TYPE} Password Reset`,
  props<{ payload: PasswordReset }>()
);

export const UserPasswordResetEror = createAction(
  `${TYPE} Password Reset Error`,
  props<{ payload: PasswordReset }>()
);

export const UserPasswordResetSuccess = createAction(
  `${TYPE} Password Reset Success`,
  props<{ payload: PasswordReset }>()
);

export const UserSignUp = createAction(
  `${TYPE} SignUp`,
  props<{ payload: User }>()
);

export const UserSignUpEror = createAction(
  `${TYPE} SignUp Error`,
  props<{ payload: User }>()
);

export const UserSignUpSuccess = createAction(
  `${TYPE} SignUp Success`,
  props<{ payload: User }>()
);

export const GetProfile = createAction(`${TYPE} Get Profile`);
export const SetUser = createAction(
  `${TYPE} Set User`,
  props<{ user: User }>()
);
export const LoadingUser = createAction(`${TYPE} Loading User`);
export const ResetUser = createAction(`${TYPE} Reset User`);
