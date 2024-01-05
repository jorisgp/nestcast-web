import { createAction, props } from '@ngrx/store';
import { Show } from 'src/app/shared/interfaces/user.interface';

const TYPE = '[Show]';

export const createShow = createAction(
  `${TYPE} Create`,
  props<{ payload: Show }>()
);

export const createShowSuccess = createAction(
  `${TYPE} Create Success`,
  props<{ payload: Show }>()
);

export const createShowError = createAction(
  `${TYPE} Create Error`,
  props<{ payload: Error }>()
);

export const fetchShow = createAction(
  `${TYPE} Fetch`,
  props<{ payload: void }>()
);

export const fetchShowSuccess = createAction(
  `${TYPE} Fetch Success`,
  props<{ payload: Show }>()
);

export const fetchShowError = createAction(
  `${TYPE} Fecth Error`,
  props<{ payload: Error }>()
);

export const updateShow = createAction(
  `${TYPE} Update`,
  props<{ payload: Show }>()
);

export const updateShowSuccess = createAction(
  `${TYPE} Update Success`,
  props<{ payload: Show }>()
);

export const updateShowError = createAction(
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
