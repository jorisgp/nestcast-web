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
  EXTRA_SMALL,
  SMALL,
  MEDIUM,
  LARGE,
}

export enum IconType {
  FACEBOOK = 'bi-facebook',
  X = 'bi-twitter-x',
  INSTAGRAM = 'bi-instagram',
  LINKEDIN = 'bi-linkedin',
  PERSONAL = 'bi-person',
  SETTINGS = 'bi-gear-wide-connected',
  SHOW = 'bi-headphones',
  DISTRIBUTION = 'bi-globe2',
  DELETE = 'bi-x-lg',
  UPLOAD = 'bi-cloud-arrow-up',
  EDIT = 'bi-pencil-square',
  ADD = 'bi-plus-square',
}
