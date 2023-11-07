import { createReducer, on } from '@ngrx/store';
import {
  WaitingListConfirmation,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import * as waitingListConfirmationActions from '../actions/waiting-list-confirmation.actions';

export interface WaitingListConfirmationState {
  payload: WaitingListConfirmation | WaitingListDetails;
  error: any;
  isLoading: boolean;
}

const initialState: WaitingListConfirmationState = {
  payload: null,
  error: null,
  isLoading: false,
};

export const waitingListConfirmationReducer = createReducer(
  initialState,
  on(waitingListConfirmationActions.confirmWaitingList, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      isLoading: true,
    };
  }),
  on(
    waitingListConfirmationActions.confirmWaitingListFailure,
    (state, error) => {
      return {
        ...state,
        payload: null,
        error: error,
        isLoading: false,
      };
    }
  ),
  on(
    waitingListConfirmationActions.confirmWaitingListSuccess,
    (state, result) => {
      return {
        ...state,
        payload: result.payload,
        error: null,
        isLoading: false,
      };
    }
  )
);
