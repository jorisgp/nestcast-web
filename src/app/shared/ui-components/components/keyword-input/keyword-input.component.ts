import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyword-input',
  templateUrl: './keyword-input.component.html',
  styleUrls: ['./keyword-input.component.scss'],
})
export class KeywordInputComponent {
  @Input()
  keywords: string[] = [];

  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  keyword: string;

  onAddKeyword() {
    if (this.keyword?.length > 0) {
      this.keywords.push(this.keyword);
      this.form.controls[this.nameFormControl].setValue(this.keywords);
      this.keyword = '';
    }
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.onAddKeyword();
    }
  }
}
