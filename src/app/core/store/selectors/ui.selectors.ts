import { createSelector } from '@ngrx/store';
import { UiState } from '../reducers/ui.reducer';

const selectUiState = (reducers: any) => {
  return reducers.uiReducer;
};

export const selectShowPrivateHeaderBackground = createSelector(
  selectUiState,
  (state: UiState) => state.showPrivateHeaderBackground
);
