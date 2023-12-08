import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserPasswordRequestReset } from 'src/app/core/store/actions/user.actions';
import { PasswordRequestReset } from 'src/app/shared/interfaces/auth.interface';
import { Gradient } from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-password-reset-request-container',
  templateUrl: './password-reset-request-container.component.html',
  styleUrls: ['./password-reset-request-container.component.scss'],
})
export class PasswordResetRequestContainerComponent {
  Gradient = Gradient;

  constructor(private store: Store<{ auth: any }>) {}

  onSubmitForm(user: PasswordRequestReset) {
    this.store.dispatch(UserPasswordRequestReset({ payload: user }));
  }
}
