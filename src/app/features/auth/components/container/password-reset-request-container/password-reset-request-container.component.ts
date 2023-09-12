import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { requestPasswordReset } from 'src/app/core/state/actions/auth.actions';
import { PasswordResetRequest } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-password-reset-request-container',
  templateUrl: './password-reset-request-container.component.html',
  styleUrls: ['./password-reset-request-container.component.scss'],
})
export class PasswordResetRequestContainerComponent {
  constructor(private store: Store<{ auth: any }>) {}

  onSubmit(passwordResetRequest: PasswordResetRequest) {
    this.store.dispatch(requestPasswordReset({ data: passwordResetRequest }));
  }
}
