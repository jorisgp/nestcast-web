import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  createEpisode,
  fetchEpisode,
  updateEpisode,
} from 'src/app/core/store/actions/episode.actions';
import { selectEpisode } from 'src/app/core/store/selectors/episode.selector';
import { FileReference } from 'src/app/shared/interfaces/auth.interface';
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
    const { audioFile, audio, ...episodeWithoutAudio } = episode;

    const audioFileDetails = this.createFileDetails(episode.id, audioFile);

    if (!episode.id) {
      this.store.dispatch(
        createEpisode({
          payload: episodeWithoutAudio,
          showId: this.showId,
          audioFile: audioFile,
          audioFileReference: audioFileDetails,
        })
      );
    } else {
      const { id, ...updatedEpisode } = episodeWithoutAudio;
      this.store.dispatch(
        updateEpisode({
          payload: updatedEpisode,
          episodeId: id,
          audioFile: audioFile,
          audioFileReference: audioFileDetails,
        })
      );
    }
  }

  private createFileDetails(episodeId: string, file: File): FileReference {
    return {
      showId: this.showId,
      episodeId: episodeId,
      contentType: file?.type,
      length: file?.size,
    };
  }
}
