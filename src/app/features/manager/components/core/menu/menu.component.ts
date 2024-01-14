import { Component } from '@angular/core';
import { IconType } from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  IconType = IconType;
}
