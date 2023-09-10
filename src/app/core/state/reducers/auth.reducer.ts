import { createReducer, on } from '@ngrx/store';
import { signIn, signInFailure, signInSuccess } from '../actions/auth.actions';

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
  on(signInSuccess, (state, { token }) => ({
    ...state,
    token,
    isLoading: false,
  })),
  on(signInFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
