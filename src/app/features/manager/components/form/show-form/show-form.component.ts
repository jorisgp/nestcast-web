import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
  form: FormGroup;

  @Output()
  submitForm = new EventEmitter<Show>();

  onSubmitForm() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.email]),
      copyright: new FormControl(null, []),
      language: new FormControl(null, [Validators.minLength(2)]),
      category: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, []),
      keywords: new FormControl(null, []),
      explicit: new FormControl(false, [Validators.required]),
    });
  }
}
