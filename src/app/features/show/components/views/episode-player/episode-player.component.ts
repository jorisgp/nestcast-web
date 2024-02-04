import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-episode-player',
  templateUrl: './episode-player.component.html',
  styleUrls: ['./episode-player.component.scss'],
})
export class EpisodePlayerComponent {
  @Input()
  data: Episode;
}
