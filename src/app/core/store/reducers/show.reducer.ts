import { Action, createReducer, on } from '@ngrx/store';
import { Show } from 'src/app/shared/interfaces/user.interface';
import {
  fetchShow,
  fetchShowError,
  fetchShowSuccess,
} from '../actions/show.actions';

export interface ShowState {
  payload: Show;
  error: string;
  isLoading: boolean;
}

const initialState: ShowState = {
  payload: null,
  error: null,
  isLoading: false,
};

const show = createReducer(
  initialState,
  on(fetchShow, (state) => ({ ...state, isLoading: true })),
  on(fetchShowSuccess, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      isLoading: false,
    };
  }),
  on(fetchShowError, (state, message) => ({
    ...state,
    message,
    isLoading: false,
  }))
);

export function showReducer(state: ShowState, action: Action) {
  return show(state, action);
}
