import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  createEpisode,
  fetchEpisode,
  updateEpisode,
} from 'src/app/core/store/actions/episode.actions';
import { selectEpisode } from 'src/app/core/store/selectors/episode.selector';
import { Episode } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-episode-edit-page-container',
  templateUrl: './episode-edit-page-container.component.html',
  styleUrls: ['./episode-edit-page-container.component.scss'],
})
export class EpisodeEditPageContainerComponent {
  episode$ = this.store.select(selectEpisode);

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ episode: any }>
  ) {}

  get showId(): string {
    return this.route.snapshot.params['showId'];
  }

  get episodeId(): string {
    return this.route.snapshot.params['episodeId'];
  }

  get editMode(): boolean {
    return !!this.episodeId;
  }
  ngOnInit(): void {
    if (this.episodeId) {
      this.fetchEpisode();
    }
  }

  fetchEpisode() {
    this.store.dispatch(fetchEpisode({ episodeId: this.episodeId }));
  }

  onSubmitForm(episode: Episode) {
    const { audio, ...episodeWithoutAudio } = episode;

    if (!episode.id) {
      console.log('Create Episode');
      this.store.dispatch(
        createEpisode({
          payload: episodeWithoutAudio,
          showId: this.showId,
          audio: audio,
        })
      );
    } else {
      const { id, ...updatedEpisode } = episodeWithoutAudio;
      this.store.dispatch(
        updateEpisode({
          payload: updatedEpisode,
          episodeId: this.episodeId,
        })
      );
    }
  }
}
