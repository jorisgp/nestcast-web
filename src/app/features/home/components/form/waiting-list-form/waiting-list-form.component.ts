import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-list-form',
  templateUrl: './waiting-list-form.component.html',
  styleUrls: ['./waiting-list-form.component.scss'],
})
export class WaitingListFormComponent {
  @Input()
  data: any;
}
