import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PasswordReset } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss'],
})
export class PasswordResetFormComponent {
  form: FormGroup;

  @Output()
  submitForm = new EventEmitter<PasswordReset>();

  onSubmitForm() {
    this.submitForm.emit(this.form.value);
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
        this._validateEqualPasswords,
      ]),
    });
  }

  private _validateEqualPasswords(control: AbstractControl): ValidationErrors {
    const passwordControl = control.parent?.get('password');
    const passwordConfirmControl = control.parent?.get('passwordConfirm');
    if (passwordControl?.value !== passwordConfirmControl?.value) {
      return { passwordsNotEqual: true };
    }

    return null;
  }
}
