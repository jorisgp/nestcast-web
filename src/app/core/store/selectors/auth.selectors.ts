import { createSelector } from '@ngrx/store';

const selectLogin = (state: any) => state.authReducer;

export const selectToken = createSelector(
  selectLogin,
  (state) => state.accessToken
);

export const selectError = createSelector(selectLogin, (state) => state.error);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading
);
