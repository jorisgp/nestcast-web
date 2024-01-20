import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first } from 'rxjs';
import {
  deleteEpisodeImage,
  fetchEpisodeList,
  uploadEpisodeImage,
} from 'src/app/core/store/actions/episode.actions';
import {
  deleteShowImage,
  fetchShow,
  uploadShowImage,
} from 'src/app/core/store/actions/show.actions';
import { selectIsLoading } from 'src/app/core/store/selectors/auth.selectors';
import { selectEpisodeList } from 'src/app/core/store/selectors/episode.selector';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';
import { FileReference } from 'src/app/shared/interfaces/auth.interface';
import { Episode } from 'src/app/shared/interfaces/user.interface';
import { ImageUploadButtonSize } from 'src/app/shared/modules/upload/components/image-upload-button/image-upload-button.component';
import { IconType } from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-show-page-container',
  templateUrl: './show-page-container.component.html',
  styleUrls: ['./show-page-container.component.scss'],
})
export class ShowPageContainerComponent implements OnInit {
  show$ = this.store.select(selectShow);
  episodes$ = this.store.select(selectEpisodeList);
  isLoading$ = this.store.select(selectIsLoading);

  IconType = IconType;
  ImageUploadButtonSize = ImageUploadButtonSize;

  showId: string;

  constructor(
    private store: Store<{ show: any }>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchShow({ payload: null }));

    this.show$
      .pipe(
        filter((show) => !!show),
        first()
      )
      .subscribe((show) => {
        this.showId = show.id;
        this.store.dispatch(fetchEpisodeList({ showId: show.id }));
      });
  }

  editEpisode(episode: Episode) {
    const routeArray = ['.', episode.show.id, 'episode', 'edit', episode.id];
    this.router.navigate(routeArray, {
      relativeTo: this.route,
    });
  }

  onUpoadShowImage(file: File, showId: string) {
    this.store.dispatch(
      uploadShowImage({
        payload: file,
        showId: showId,
        fileDetails: this.createFileDetails(undefined, file),
      })
    );
  }

  onUpoadEpisodeImage(file: File, episodeId: string) {
    this.store.dispatch(
      uploadEpisodeImage({
        payload: file,
        fileDetails: this.createFileDetails(episodeId, file),
      })
    );
  }

  onDeleteShowImage(showId: string) {
    this.store.dispatch(deleteShowImage({ showId }));
  }

  onDeleteEpisodeImage(episodeId: string) {
    this.store.dispatch(deleteEpisodeImage({ episodeId }));
  }

  private createFileDetails(episodeId: string, file: File): FileReference {
    return {
      showId: this.showId,
      episodeId: episodeId,
      contentType: file.type,
      length: file.size,
    };
  }
}
