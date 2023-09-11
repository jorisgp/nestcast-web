import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss'],
})
export class SignUpContainerComponent {
  onSignUp(event: any) {
    console.log('Sign up', event);
  }
}
