import { Component, Input } from '@angular/core';
import { IconButtonColor } from '../icon-button/icon-button.component';
import { IconSize, IconType } from '../icon/icon.component';

@Component({
  selector: 'app-round-icon-button',
  templateUrl: './round-icon-button.component.html',
  styleUrls: ['./round-icon-button.component.scss'],
})
export class RoundIconButtonComponent {
  @Input()
  iconType: IconType;

  @Input()
  iconSize?: IconSize;

  @Input()
  color = IconButtonColor.DARK;

  @Input()
  routerLinkData: string[] | string;

  IconButtonColor = IconButtonColor;

  showMargin(data: any) {
    return data.innerHTML !== '<!---->';
  }
}
