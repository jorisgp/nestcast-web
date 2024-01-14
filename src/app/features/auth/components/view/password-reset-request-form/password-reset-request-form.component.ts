import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordRequestReset } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-password-reset-request-form',
  templateUrl: './password-reset-request-form.component.html',
  styleUrls: ['./password-reset-request-form.component.scss'],
})
export class PasswordResetRequestFormComponent {
  form: FormGroup;

  @Output()
  submitForm = new EventEmitter<PasswordRequestReset>();

  onSubmitForm() {
    this.submitForm.emit(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}
