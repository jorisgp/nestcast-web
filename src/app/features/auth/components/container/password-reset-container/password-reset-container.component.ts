import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserPasswordReset } from 'src/app/core/store/actions/user.actions';
import { PasswordReset } from 'src/app/shared/interfaces/auth.interface';
import { Gradient } from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-password-reset-container',
  templateUrl: './password-reset-container.component.html',
  styleUrls: ['./password-reset-container.component.scss'],
})
export class PasswordResetContainerComponent {
  Gradient = Gradient;

  constructor(
    private store: Store<{ auth: any }>,
    private route: ActivatedRoute
  ) {}

  onSubmitForm(passwordReset: PasswordReset) {
    const token = this.route.snapshot.params['token'];
    passwordReset.token = token;
    this.store.dispatch(UserPasswordReset({ payload: passwordReset }));
  }
}
