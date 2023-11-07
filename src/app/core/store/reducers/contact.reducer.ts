import { createReducer, on } from '@ngrx/store';
import {
  Contact,
  ContactConfirmation,
  ContactDetails,
} from 'src/app/shared/interfaces/auth.interface';
import * as contactActions from '../actions/contact.actions';

export interface ContactState {
  payload: ContactDetails | Contact | ContactConfirmation;
  error: any;
  isLoading: boolean;
}

const initialState: ContactState = {
  payload: null,
  error: null,
  isLoading: false,
};

export const contactReducer = createReducer(
  initialState,
  on(contactActions.addToContact, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      isLoading: true,
    };
  }),
  on(contactActions.addToContactFailure, (state, error) => {
    return {
      ...state,
      payload: null,
      error: error,
      isLoading: false,
    };
  }),
  on(contactActions.addToContactSuccess, (state, result) => {
    return {
      ...state,
      payload: result.payload,
      error: null,
      isLoading: false,
    };
  })
);
