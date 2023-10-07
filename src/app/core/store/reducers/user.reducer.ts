import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Status } from 'src/app/shared/shared.constants';
import * as userActions from '../actions/user.actions';

export interface UserState {
  payload: User;
  status: Status;
}

export const initialState: UserState = {
  payload: null,
  status: Status.UNINITIALIZED,
};

const user = createReducer(
  initialState,
  on(userActions.SetUser, (state, payload) => {
    return {
      ...state,
      payload: payload.user,
      status: Status.LOADED,
    };
  }),
  on(userActions.LoadingUser, (state) => {
    return {
      ...state,
      payload: null,
      status: Status.LOADING,
    };
  }),
  on(userActions.ResetUser, (state) => ({
    ...state,
    payload: null,
    status: Status.UNINITIALIZED,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return user(state, action);
}
