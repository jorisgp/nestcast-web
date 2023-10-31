import { createAction, props } from '@ngrx/store';
import {
  Contact,
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
