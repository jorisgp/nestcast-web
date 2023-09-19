import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordRequestReset } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss'],
})
export class PasswordResetFormComponent {
  form: FormGroup;

  @Output()
  submit = new EventEmitter<PasswordRequestReset>();

  submitForm() {
    this.submit.emit(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
