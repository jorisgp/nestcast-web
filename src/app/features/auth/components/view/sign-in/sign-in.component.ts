import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  username: string;
  password: string;

  @Input()
  token: string;

  @Input()
  error: string;

  @Input()
  isLoading = false;

  @Output()
  signIn = new EventEmitter<{ username: string; password: string }>();

  onSubmit() {
    this.signIn.emit({ username: this.username, password: this.password });
  }
}
