import { createReducer, on } from '@ngrx/store';
import {
  WaitingList,
  WaitingListConfirmation,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import * as waitingListActions from '../actions/waiting-list.actions';

export interface WaitingListState {
  payload: WaitingListDetails | WaitingList | WaitingListConfirmation;
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
  on(waitingListActions.addToWaitingList, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      isLoading: true,
    };
  }),
  on(waitingListActions.addToWaitingListFailure, (state, error) => {
    return {
      ...state,
      payload: null,
      error: error,
      isLoading: false,
    };
  }),
  on(waitingListActions.addToWaitingListSuccess, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      error: null,
      isLoading: false,
    };
  })
);
