import { createReducer, on } from '@ngrx/store';
import {
  ContactConfirmation,
  ContactDetails,
} from 'src/app/shared/interfaces/auth.interface';
import * as contactConfirmationActions from '../actions/contact-confirmation.actions';

export interface ContactConfirmationState {
  payload: ContactDetails | ContactConfirmation;
  error: any;
  isLoading: boolean;
}

const initialState: ContactConfirmationState = {
  payload: null,
  error: null,
  isLoading: false,
};

export const contactConfirmationReducer = createReducer(
  initialState,
  on(contactConfirmationActions.confirmContact, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      isLoading: true,
    };
  }),
  on(contactConfirmationActions.confirmContactFailure, (state, error) => {
    return {
      ...state,
      payload: null,
      error: error,
      isLoading: false,
    };
  }),
  on(contactConfirmationActions.confirmContactSuccess, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      error: null,
      isLoading: false,
    };
  })
);
