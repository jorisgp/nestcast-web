import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { signIn } from 'src/app/core/state/actions/auth.actions';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from 'src/app/core/state/selectors/auth.selectors';
import { Auth } from '../../../model/auth.model';

@Component({
  selector: 'app-sign-in-container',
  templateUrl: './sign-in-container.component.html',
  styleUrls: ['./sign-in-container.component.scss'],
})
export class SignInContainerComponent {
  error$ = this.store.select(selectError);
  isLoading$ = this.store.select(selectIsLoading);
  token$ = this.store.select(selectToken);

  constructor(private router: Router, private store: Store<{ auth: any }>) {}

  ngOnInit() {
    this.token$.subscribe((token) => {
      if (token) {
        this.router.navigate(['/', 'admin']);
      }
    });
  }

  onSubmit(auth: Auth) {
    this.store.dispatch(signIn({ payload: auth }));
  }
}
