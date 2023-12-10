import { createAction, props } from '@ngrx/store';
import { Show } from 'src/app/shared/interfaces/user.interface';

const TYPE = '[Show]';

export const create = createAction(
  `${TYPE} Create`,
  props<{ payload: Show }>()
);

export const createSuccess = createAction(
  `${TYPE} Create Success`,
  props<{ payload: Show }>()
);

export const createError = createAction(
  `${TYPE} Create Error`,
  props<{ payload: Error }>()
);

export const fetch = createAction(`${TYPE} Fecth`, props<{ payload: null }>());

export const fetchSuccess = createAction(
  `${TYPE} Fecth Success`,
  props<{ payload: Show }>()
);

export const fetchError = createAction(
  `${TYPE} Fecth Error`,
  props<{ payload: Error }>()
);

export const update = createAction(
  `${TYPE} Update`,
  props<{ payload: Show }>()
);

export const updateSuccess = createAction(
  `${TYPE} Update Success`,
  props<{ payload: Show }>()
);

export const updateError = createAction(
  `${TYPE} Update Error`,
  props<{ payload: Error }>()
);

export const deleteShow = createAction(
  `${TYPE} Delete`,
  props<{ payload: Show }>()
);

export const deleteShowSuccess = createAction(
  `${TYPE} Delete Success`,
  props<{ payload: null }>()
);

export const deleteShowError = createAction(
  `${TYPE} Delete Error`,
  props<{ payload: Error }>()
);
