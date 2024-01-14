import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Status } from 'src/app/shared/shared.constants';
import { UserState } from '../reducers/user.reducer';

export const userState = createFeatureSelector<UserState>('user');

export const selectIsLoading = createSelector(
  userState,
  (state: UserState) => state.status === Status.LOADING
);

export const selectUser = createSelector(
  userState,
  (state: UserState) => state.payload
);
