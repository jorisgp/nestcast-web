import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-lost-form',
  templateUrl: './password-lost-form.component.html',
  styleUrls: ['./password-lost-form.component.scss'],
})
export class PasswordLostFormComponent {
  form: FormGroup;

  @Output()
  submit = new EventEmitter<{ username: string }>();

  submitForm() {
    this.submit.emit(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}
