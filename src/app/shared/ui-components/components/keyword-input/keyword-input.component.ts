import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconSize, IconType } from '../icon/icon.component';

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

  IconType = IconType;
  IconSize = IconSize;

  onAddKeyword() {
    if (this.keyword?.length > 0) {
      this.keywords.push(this.keyword);
      this.saveKeywords();
      this.keyword = '';
    }
  }

  onDeleteKeyword(index: number) {
    this.keywords.splice(index, 1);
    this.saveKeywords();
  }

  private saveKeywords() {
    this.form.controls[this.nameFormControl].setValue(this.keywords);
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
