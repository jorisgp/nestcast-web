import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-renew-form',
  templateUrl: './password-renew-form.component.html',
  styleUrls: ['./password-renew-form.component.scss'],
})
export class PasswordRenewFormComponent {
  form: FormGroup;

  @Output()
  submit = new EventEmitter<{ password: string }>();

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
