import { Action, createReducer, on } from '@ngrx/store';
import { Episode } from 'src/app/shared/interfaces/user.interface';
import {
  fetchEpisode,
  fetchEpisodeError,
  fetchEpisodeListSuccess,
  fetchEpisodeSuccess,
} from '../actions/episode.actions';

export interface EpisodeState {
  episode: Episode;
  episodeList: Episode[];
  error: string;
  isLoading: boolean;
}

const initialState: EpisodeState = {
  episode: null,
  episodeList: null,
  error: null,
  isLoading: false,
};

const episode = createReducer(
  initialState,
  on(fetchEpisode, (state) => ({ ...state, isLoading: true })),
  on(fetchEpisodeSuccess, (state, result) => {
    return {
      ...state,
      episode: result.payload,
      isLoading: false,
    };
  }),
  on(fetchEpisodeError, (state, message) => ({
    ...state,
    message,
    isLoading: false,
  })),
  on(fetchEpisodeListSuccess, (state, result) => {
    return {
      ...state,
      episodeList: result.payload,
      isLoading: false,
    };
  })
);

export function episodeReducer(state: EpisodeState, action: Action) {
  return episode(state, action);
}
