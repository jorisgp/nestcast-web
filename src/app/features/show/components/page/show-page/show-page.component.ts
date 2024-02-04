import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first } from 'rxjs';
import { fetchEpisodeList } from 'src/app/core/store/actions/episode.actions';
import { fetchShow } from 'src/app/core/store/actions/show.actions';
import { selectEpisodeList } from 'src/app/core/store/selectors/episode.selector';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss'],
})
export class ShowPageComponent {

}
