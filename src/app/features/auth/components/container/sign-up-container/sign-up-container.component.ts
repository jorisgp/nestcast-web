import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/core/state/actions/auth.actions';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss'],
})
export class SignUpContainerComponent {
  constructor(private store: Store<{ auth: any }>) {}

  onSubmit(user: User) {
    this.store.dispatch(signUp({ data: user }));
  }
}
