import { createAction, props } from '@ngrx/store';
import {
  WaitingListConfirmation,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';

const TYPE = '[WaitingLisConfirmation]';

export const confirmWaitingList = createAction(
  `${TYPE} Confirm`,
  props<{ payload: WaitingListConfirmation }>()
);

export const confirmWaitingListSuccess = createAction(
  `${TYPE} Confirm Success`,
  props<{ payload: WaitingListDetails }>()
);

export const confirmWaitingListFailure = createAction(
  `${TYPE} Confirm Failure`,
  props<{ payload: Error }>()
);
