import { createAction, props } from '@ngrx/store';
import { Episode } from 'src/app/shared/interfaces/user.interface';

const TYPE = '[Episode]';

export const createEpisode = createAction(
  `${TYPE} Create`,
  props<{ payload: Episode; showId: string; audio: File }>()
);

export const createEpisodeSuccess = createAction(
  `${TYPE} Create Success`,
  props<{ payload: Episode }>()
);

export const createEpisodeError = createAction(
  `${TYPE} Create Error`,
  props<{ payload: Error }>()
);

export const fetchEpisode = createAction(
  `${TYPE} Fetch`,
  props<{ episodeId: string }>()
);

export const fetchEpisodeSuccess = createAction(
  `${TYPE} Fetch Success`,
  props<{ payload: Episode }>()
);

export const fetchEpisodeError = createAction(
  `${TYPE} Fecth Error`,
  props<{ payload: Error }>()
);

export const fetchEpisodeList = createAction(
  `${TYPE} Fetch List`,
  props<{ showId: string }>()
);

export const fetchEpisodeListSuccess = createAction(
  `${TYPE} Fetch List Success`,
  props<{ payload: Episode[] }>()
);

export const fetchEpisodeListError = createAction(
  `${TYPE} Fecth List Error`,
  props<{ payload: Error }>()
);

export const updateEpisode = createAction(
  `${TYPE} Update`,
  props<{ payload: Episode; episodeId: string; audio: File }>()
);

export const updateEpisodeSuccess = createAction(
  `${TYPE} Update Success`,
  props<{ payload: Episode }>()
);

export const updateEpisodeError = createAction(
  `${TYPE} Update Error`,
  props<{ payload: Error }>()
);

export const deleteEpisode = createAction(
  `${TYPE} Delete`,
  props<{ payload: Episode }>()
);

export const deleteEpisodeSuccess = createAction(
  `${TYPE} Delete Success`,
  props<{ payload: null }>()
);

export const deleteEpisodeError = createAction(
  `${TYPE} Delete Error`,
  props<{ payload: Error }>()
);

export const uploadEpisodeImage = createAction(
  `${TYPE} Upload Image`,
  props<{ payload: File; episodeId: string }>()
);

export const uploadEpisodeImageSuccess = createAction(
  `${TYPE} Upload Image Success`,
  props<{ payload: Episode }>()
);

export const uploadEpisodeImageError = createAction(
  `${TYPE} Upload Image Error`,
  props<{ payload: Error }>()
);

export const deleteEpisodeImage = createAction(
  `${TYPE} Delete Image`,
  props<{ episodeId: string }>()
);

export const deleteEpisodeImageSuccess = createAction(
  `${TYPE} Delete Image Success`,
  props<{ payload: Episode }>()
);

export const deleteEpisodeImageError = createAction(
  `${TYPE} Delete Image Error`,
  props<{ payload: Error }>()
);

export const uploadEpisodeAudio = createAction(
  `${TYPE} Upload Audio`,
  props<{ payload: File; episodeId: string }>()
);

export const uploadEpisodeAudioSuccess = createAction(
  `${TYPE} Upload Audio Success`,
  props<{ payload: Episode }>()
);

export const uploadEpisodeAudioError = createAction(
  `${TYPE} Upload Audio Error`,
  props<{ payload: Error }>()
);

export const createEpisodeAddAudio = createAction(
  `${TYPE} Create Add Audio`,
  props<{ payload: Episode; audio: File }>()
);

export const createEpisodeAddAudioSuccess = createAction(
  `${TYPE} Create Add Audio Success`,
  props<{ payload: Episode }>()
);

export const createEpisodeAddAudioError = createAction(
  `${TYPE} Create Add Audio Error`,
  props<{ payload: Error }>()
);
