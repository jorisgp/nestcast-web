import { createAction, props } from '@ngrx/store';
import {
  Contact,
  ContactConfirmation,
  ContactDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { Error } from 'src/app/shared/interfaces/nest-cast.interface';

const TYPE = '[Contact]';

export const addToContact = createAction(
  `${TYPE} Add`,
  props<{ payload: Contact }>()
);

export const addToContactSuccess = createAction(
  `${TYPE} Add Success`,
  props<{ payload: ContactDetails }>()
);

export const addToContactFailure = createAction(
  `${TYPE} Add Failure`,
  props<{ payload: Error }>()
);

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
