import { createSelector } from '@ngrx/store';

const selectWaitingListState = (state: any) => {
  return state.waitingListReducer;
};

export const selectWaitingListConfirmationError = createSelector(
  selectWaitingListState,
  (state) => state.error
);

export const selectWaitingListConfirmation = createSelector(
  selectWaitingListState,
  (state) => state.payload
);

export const selectWaitingListConfirmationIsLoading = createSelector(
  selectWaitingListState,
  (state) => state.isLoading
);
