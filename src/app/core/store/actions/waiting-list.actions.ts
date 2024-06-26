import { createAction, props } from '@ngrx/store';
import {
  WaitingList,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';

const TYPE = '[WaitingList]';

export const addToWaitingList = createAction(
  `${TYPE} Add`,
  props<{ payload: WaitingList }>()
);

export const addToWaitingListSuccess = createAction(
  `${TYPE} Add Success`,
  props<{ payload: WaitingListDetails }>()
);

export const addToWaitingListFailure = createAction(
  `${TYPE} Add Failure`,
  props<{ payload: Error }>()
);
