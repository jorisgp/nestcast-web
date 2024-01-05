import { createSelector } from '@ngrx/store';
import { EpisodeState } from '../reducers/episode.reducer';

const selectEpisodeState = (state: any) => {
  return state.episodeReducer;
};

export const selectEpisodeIsLoading = createSelector(
  selectEpisodeState,
  (state: EpisodeState) => state.isLoading
);

export const selectEpisodeList = createSelector(
  selectEpisodeState,
  (state: EpisodeState) => {
    return state.episodeList;
  }
);

export const selectEpisode = createSelector(
  selectEpisodeState,
  (state: EpisodeState) => {
    return state.episode;
  }
);
