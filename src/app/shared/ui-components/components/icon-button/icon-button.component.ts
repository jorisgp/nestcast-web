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
  routerLinkData: string[] | string;
}
