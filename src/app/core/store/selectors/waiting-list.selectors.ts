import { createSelector } from '@ngrx/store';

const selectWaitingListState = (state: any) => state.waitingList;

export const selectWaitingListError = createSelector(
  selectWaitingListState,
  (state) => state.error
);

export const selectWaitingList = createSelector(
  selectWaitingListState,
  (state) => state.payload
);

export const selectWaitingListIsLoading = createSelector(
  selectWaitingListState,
  (state) => state.isLoading
);
