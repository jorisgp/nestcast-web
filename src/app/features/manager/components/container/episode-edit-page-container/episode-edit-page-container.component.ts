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
  ngOnInit(): void {
    this.fetchEpisode();
  }

  fetchEpisode() {
    this.store.dispatch(fetchEpisode({ episodeId: this.episodeId }));
  }

  onSubmitForm(episode: Episode) {
    if (!episode.id) {
      this.store.dispatch(
        createEpisode({ payload: episode, showId: this.showId })
      );
    } else {
      this.store.dispatch(
        updateEpisode({
          payload: episode,
          episodeId: this.episodeId,
        })
      );
    }
  }
}
