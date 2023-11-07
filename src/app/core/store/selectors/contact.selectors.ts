import { createSelector } from '@ngrx/store';

const selectContactState = (state: any) => {
  return state.contactReducer;
};

export const selectContactError = createSelector(
  selectContactState,
  (state) => state.error
);

export const selectContact = createSelector(
  selectContactState,
  (state) => state.payload
);

export const selectContactIsLoading = createSelector(
  selectContactState,
  (state) => state.isLoading
);
