import { createReducer, on } from '@ngrx/store';
import {
  signIn,
  signInFailure,
  signInSuccess,
  signOut,
} from '../actions/auth.actions';

export interface State {
  token: string;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  token: null,
  error: null,
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,
  on(signIn, (state) => ({ ...state, isLoading: true })),
  on(signInSuccess, (state, accessToken) => ({
    ...state,
    accessToken,
    isLoading: false,
  })),
  on(signInFailure, (state, message) => ({
    ...state,
    message,
    isLoading: false,
  })),
  on(signOut, () => initialState)
);
