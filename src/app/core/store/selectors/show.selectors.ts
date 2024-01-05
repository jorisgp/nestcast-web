import { createSelector } from '@ngrx/store';
import { ShowState } from '../reducers/show.reducer';

const selectShowState = (state: any) => {
  return state.showReducer;
};

export const selectShowIsLoading = createSelector(
  selectShowState,
  (state: ShowState) => state.isLoading
);

export const selectShow = createSelector(
  selectShowState,
  (state: ShowState) => {
    return state.payload;
  }
);
