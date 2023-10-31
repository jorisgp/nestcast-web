import { createSelector } from '@ngrx/store';

const selectContactState = (state: any) => {
  return state.contactReducer;
};

export const selectContactConfirmationError = createSelector(
  selectContactState,
  (state) => state.error
);

export const selectContactConfirmation = createSelector(
  selectContactState,
  (state) => state.payload
);

export const selectContactConfirmationIsLoading = createSelector(
  selectContactState,
  (state) => state.isLoading
);
