import { Action, createReducer, on } from '@ngrx/store';
import * as uiActions from '../actions/ui.actions';

export interface UiState {
  showPrivateHeaderBackground: boolean;
}

export const initialState: UiState = {
  showPrivateHeaderBackground: false,
};

const ui = createReducer(
  initialState,
  on(uiActions.showPrivateHeaderBackground, (state) => {
    console.log('show');
    return {
      ...state,
      showPrivateHeaderBackground: true,
    };
  }),
  on(uiActions.hidePrivateHeaderBackground, (state) => {
    console.log('hide');
    return {
      ...state,
      showPrivateHeaderBackground: false,
    };
  })
);

export function uiReducer(state: UiState | undefined, action: Action) {
  return ui(state, action);
}
