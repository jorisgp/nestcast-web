import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signIn } from 'src/app/core/state/actions/auth.actions';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from 'src/app/core/state/selectors/auth.selectors';

@Component({
  selector: 'app-sign-in-container',
  templateUrl: './sign-in-container.component.html',
  styleUrls: ['./sign-in-container.component.scss'],
})
export class SignInContainerComponent {
  error$ = this.store.select(selectError);
  isLoading$ = this.store.select(selectIsLoading);
  token$ = this.store.select(selectToken);

  constructor(private store: Store<{ auth: any }>) {}

  onSignIn(event: any) {
    this.store.dispatch(
      signIn({ username: event.username, password: event.password })
    );
  }
}
