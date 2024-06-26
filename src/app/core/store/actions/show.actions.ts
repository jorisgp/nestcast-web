import { createAction, props } from '@ngrx/store';
import { FileReference } from 'src/app/shared/interfaces/auth.interface';
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

export const fetchShowByDomain = createAction(
  `${TYPE} Fetch by Domain`,
  props<{ domain: string }>()
);

export const fetchShowByDomainSuccess = createAction(
  `${TYPE} Fetch By Domain Success`,
  props<{ show: Show }>()
);

export const fetchShowByDomainError = createAction(
  `${TYPE} Fetch By Domain Error`,
  props<{ error: Error }>()
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
  props<{ payload: Show; showId: string }>()
);

export const uploadShowImage = createAction(
  `${TYPE} Upload Image`,
  props<{ payload: File; showId: string; fileDetails: FileReference }>()
);

export const uploadShowImageSuccess = createAction(
  `${TYPE} Upload Image Success`,
  props<{ payload: Show }>()
);

export const uploadShowImageError = createAction(
  `${TYPE} Upload Image Error`,
  props<{ payload: Error }>()
);

export const deleteShowImage = createAction(
  `${TYPE} Delete Image`,
  props<{ showId: string }>()
);

export const deleteShowImageSuccess = createAction(
  `${TYPE} Delete Image Success`,
  props<{ payload: Show }>()
);

export const deleteShowImageError = createAction(
  `${TYPE} Delete Image Error`,
  props<{ payload: Error }>()
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
