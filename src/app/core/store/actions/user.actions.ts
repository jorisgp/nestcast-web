import { createAction, props } from '@ngrx/store';
import {
  PasswordRequestReset,
  PasswordReset,
} from 'src/app/shared/interfaces/auth.interface';
import { Confirmation, User } from 'src/app/shared/interfaces/user.interface';

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
  props<{ payload: void }>()
);

export const UserPasswordReset = createAction(
  `${TYPE} Password Reset`,
  props<{ payload: PasswordReset }>()
);

export const UserPasswordResetError = createAction(
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

export const UserSignUpError = createAction(
  `${TYPE} SignUp Error`,
  props<{ payload: User }>()
);

export const UserSignUpSuccess = createAction(
  `${TYPE} SignUp Success`,
  props<{ payload: User }>()
);

export const UserRequestConfirmationCode = createAction(
  `${TYPE} Request Confirmation Code`,
  props<{ payload: User }>()
);

export const UserRequestConfirmationCodeError = createAction(
  `${TYPE} Request Confirmation Code Error`,
  props<{ payload: User }>()
);

export const UserRequestConfirmationCodeSuccess = createAction(
  `${TYPE} Request Confirmation Code Success`,
  props<{ payload: User }>()
);

export const UserConfirmUsername = createAction(
  `${TYPE} Confirm Username`,
  props<{ payload: Confirmation }>()
);

export const UserConfirmUsernameError = createAction(
  `${TYPE} Confirm Username Error`,
  props<{ payload: User }>()
);

export const UserConfirmUsernameSuccess = createAction(
  `${TYPE} Confirm Username Success`,
  props<{ payload: User }>()
);

export const GetProfile = createAction(`${TYPE} Get Profile`);

export const SetUser = createAction(
  `${TYPE} Set User`,
  props<{ user: User }>()
);
export const LoadingUser = createAction(`${TYPE} Loading User`);
export const ResetUser = createAction(`${TYPE} Reset User`);
