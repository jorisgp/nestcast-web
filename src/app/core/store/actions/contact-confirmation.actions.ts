import { createAction, props } from '@ngrx/store';
import {
  ContactConfirmation,
  ContactDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';

const TYPE = '[ContactConfirmation]';

export const confirmContact = createAction(
  `${TYPE} Confirm`,
  props<{ payload: ContactConfirmation }>()
);

export const confirmContactSuccess = createAction(
  `${TYPE} Confirm Success`,
  props<{ payload: ContactDetails }>()
);

export const confirmContactFailure = createAction(
  `${TYPE} Confirm Failure`,
  props<{ payload: Error }>()
);
