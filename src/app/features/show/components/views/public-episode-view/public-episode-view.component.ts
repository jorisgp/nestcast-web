import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episode, Show } from 'src/app/shared/interfaces/user.interface';
import {
  IconSize,
  IconType,
} from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-public-episode-view',
  templateUrl: './public-episode-view.component.html',
  styleUrls: ['./public-episode-view.component.scss'],
})
export class PublicEpisodeViewComponent {
  @Input()
  data: Episode;

  @Input()
  show: Show;

  @Input()
  playing: boolean = false;

  @Output()
  play = new EventEmitter<Episode>();

  IconType = IconType;
  IconSize = IconSize;

  get image() {
    return this.data?.image?.url || this.show?.image?.url;
  }
}
