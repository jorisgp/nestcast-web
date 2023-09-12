import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../../model/auth.model';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInComponent {
  form: FormGroup;

  @Input()
  token: string;

  @Input()
  error: string;

  @Input()
  isLoading = false;

  @Output()
  submit = new EventEmitter<Auth>();

  submitForm() {
    this.submit.emit(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
