import { Component, Input } from '@angular/core';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-public-show-view',
  templateUrl: './public-show-view.component.html',
  styleUrls: ['./public-show-view.component.scss'],
})
export class PublicShowViewComponent {
  @Input()
  show: Show;
}
