import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.scss'],
})
export class NumberSelectComponent {
  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  @Input()
  start: number = 0;

  @Input()
  end: number = 200;

  get optionValues(): number[] {
    const values = [];
    for (let i = this.start; i <= this.end; i++) {
      values.push(i);
    }
    return values;
  }
}
