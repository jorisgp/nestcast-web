import { createReducer, on } from '@ngrx/store';
import { WaitingList } from 'src/app/shared/interfaces/auth.interface';
import {
  addToWaitingList,
  addToWaitingListFailure,
  addToWaitingListSuccess,
} from '../actions/waiting-list.actions';

export interface WaitingListState {
  payload: WaitingList;
  error: any;
  isLoading: boolean;
}

const initialState: WaitingListState = {
  payload: null,
  error: null,
  isLoading: false,
};

export const waitingListReducer = createReducer(
  initialState,
  on(addToWaitingList, (state, result) => ({
    ...state,
    payload: result.payload,
    isLoading: true,
  })),
  on(addToWaitingListFailure, (state, error) => ({
    ...state,
    payload: null,
    error: error,
    isLoading: false,
  })),
  on(addToWaitingListSuccess, (state, result) => ({
    ...state,
    payload: result.payload,
    isLoading: false,
  }))
);
