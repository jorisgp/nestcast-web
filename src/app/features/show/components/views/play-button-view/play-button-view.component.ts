import { Component, Input } from '@angular/core';
import {
  IconSize,
  IconType,
} from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-play-button-view',
  templateUrl: './play-button-view.component.html',
  styleUrls: ['./play-button-view.component.scss'],
})
export class PlayButtonViewComponent {
  @Input()
  playing: boolean = false;

  IconType = IconType;
  IconSize = IconSize;
}
