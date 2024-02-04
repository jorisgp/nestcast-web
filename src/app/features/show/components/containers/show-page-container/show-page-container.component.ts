import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, first, takeUntil } from 'rxjs';
import { fetchEpisodeList } from 'src/app/core/store/actions/episode.actions';
import { fetchShowByDomain } from 'src/app/core/store/actions/show.actions';
import { selectEpisodeList } from 'src/app/core/store/selectors/episode.selector';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';
import { Episode, Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-page-container',
  templateUrl: './show-page-container.component.html',
  styleUrls: ['./show-page-container.component.scss'],
})
export class ShowPageContainerComponent {
  destory$ = new Subject();
  show$ = this.store.select(selectShow);
  episodes$ = this.store.select(selectEpisodeList);

  show: Show;
  selectedEpisode: Episode;

  constructor(
    private store: Store<{ show: any }>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const domain = this.route.snapshot.params['show'];
    const episodeId = this.route.snapshot.params['episodeId'];

    this.store.dispatch(fetchShowByDomain({ domain: domain }));
    this.show$
      .pipe(
        takeUntil(this.destory$),
        filter((show) => !!show),
        first()
      )
      .subscribe((show) => {
        this.show = show;
        this.store.dispatch(fetchEpisodeList({ showId: show.id }));
      });

    this.episodes$.subscribe((episodes) => {
      this.selectedEpisode = episodes.find(
        (episode) => episode.id === episodeId
      );
    });
  }

  onPlay(episode: Episode) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['show', this.show.domainName, episode.id]);
  }
}
