import { Component, Input } from '@angular/core';
import { Country } from '../../model/models';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input()
  data: Country;
}
