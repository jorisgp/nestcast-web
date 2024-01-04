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
      language: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
      category: new FormControl('', [Validators.required]),
      subCategory: new FormControl('', []),
      keywords: new FormControl([], []),
      explicit: new FormControl(false, [Validators.required]),
    });

    this.form.controls['category'].valueChanges.subscribe(() => {
      console.log('category changed');
      this.form.controls['subCategory'].setValue('');
      console.log(this.form.controls['subCategory'].value);
    });
  }
}
