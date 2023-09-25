import { Component } from '@angular/core';
import { IconType } from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  IconType = IconType;
}
