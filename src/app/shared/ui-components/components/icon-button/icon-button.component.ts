import { Component, Input } from '@angular/core';
import { IconType } from '../icon/icon.component';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input()
  iconType: IconType;

  @Input()
  color = IconButtonColor.DARK;

  @Input()
  routerLinkData: string[] | string;

  IconButtonColor = IconButtonColor;

  showMargin(data: any) {
    return data.innerHTML !== '<!---->';
  }
}

export enum IconButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
  LINK = 'link',
}
