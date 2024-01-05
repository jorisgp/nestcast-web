import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchEpisodeList } from 'src/app/core/store/actions/episode.actions';
import { fetchShow } from 'src/app/core/store/actions/show.actions';
import { selectIsLoading } from 'src/app/core/store/selectors/auth.selectors';
import { selectEpisodeList } from 'src/app/core/store/selectors/episode.selector';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';
import { Episode } from 'src/app/shared/interfaces/user.interface';
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

  constructor(
    private store: Store<{ show: any }>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchShow({ payload: null }));

    this.show$.subscribe((show) => {
      this.store.dispatch(fetchEpisodeList({ showId: show.id }));
    });

    this.episodes$.subscribe((episodeList) => {
      console.log('episodeList', episodeList);
    });
  }

  editEpisode(episode: Episode) {
    const routeArray = ['.', episode.show.id, 'episode', 'edit', episode.id];
    this.router.navigate(routeArray, {
      relativeTo: this.route,
    });
  }
}
