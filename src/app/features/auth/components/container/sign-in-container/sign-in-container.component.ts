import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
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
export class SignInContainerComponent implements OnInit {
  error = '';
  isLoading = false;
  token = '';

  constructor(private store: Store<{ auth: any }>) {}

  ngOnInit(): void {
    this.store
      .select(selectToken)
      .pipe(tap((result) => console.log(result)))
      .subscribe((token: string) => (this.token = token));

    this.store
      .select(selectError)
      .pipe(tap((result) => console.log(result)))
      .subscribe((error: string) => (this.error = error));

    this.store
      .select(selectIsLoading)
      .pipe(tap((result) => console.log(result)))
      .subscribe((isLoading: boolean) => (this.isLoading = isLoading));
  }

  onSignIn(event: any) {
    this.store.dispatch(
      signIn({ username: event.username, password: event.password })
    );
  }
}
