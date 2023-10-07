import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Status } from 'src/app/shared/shared.constants';
import { UserState } from '../reducers/user.reducer';

export const userState = createFeatureSelector<UserState>('user');

export const isUserLoading = createSelector(
  userState,
  (state: UserState) => state.status === Status.LOADING
);
