import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episode, Show } from 'src/app/shared/interfaces/user.interface';

import { IconType } from '../icon/icon.component';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss'],
})
export class EpisodeDetailsComponent {
  @Input()
  episodeData: Episode;

  @Input()
  showData: Show;

  @Output()
  editEpisode = new EventEmitter<Episode>();

  IconType = IconType;
}
