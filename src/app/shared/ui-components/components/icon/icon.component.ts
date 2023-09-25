import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  type: IconType;

  @Input()
  size = IconSize.SMALL;

  @Input()
  color = IconColor.DEFAULT;

  IconSize = IconSize;
  IconColor = IconColor;
}

export enum IconColor {
  DEFAULT,
  DARK,
  LIGHT,
  GREY,
}

export enum IconSize {
  SMALL,
  MEDIUM,
  LARGE,
}

export enum IconType {
  FACEBOOK = 'bi-facebook',
  X = 'bi-twitter-x',
  INSTAGRAM = 'bi-instagram',
  LINKEDIN = 'bi-linkedin',
}
