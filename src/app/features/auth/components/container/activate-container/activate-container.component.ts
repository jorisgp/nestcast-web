import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSignUp } from 'src/app/core/store/actions/user.actions';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Gradient } from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-activate-container',
  templateUrl: './activate-container.component.html',
  styleUrls: ['./activate-container.component.scss'],
})
export class ActivateContainerComponent {
  Gradient = Gradient;

  constructor(private store: Store<{ auth: any }>) {}

  onSubmit(user: User) {
    this.store.dispatch(UserSignUp({ payload: user }));
  }
}
