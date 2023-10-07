import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserPasswordRequestReset } from 'src/app/core/store/actions/user.actions';
import { PasswordRequestReset } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-password-reset-request-container',
  templateUrl: './password-reset-request-container.component.html',
  styleUrls: ['./password-reset-request-container.component.scss'],
})
export class PasswordResetRequestContainerComponent {
  constructor(private store: Store<{ auth: any }>) {}

  onSubmit(passwordRequestReset: PasswordRequestReset) {
    this.store.dispatch(
      UserPasswordRequestReset({ payload: passwordRequestReset })
    );
  }
}
