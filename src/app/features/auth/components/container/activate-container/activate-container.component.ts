import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  UserConfirmUsername,
  UserRequestConfirmationCode,
} from 'src/app/core/store/actions/user.actions';
import { selectUser } from 'src/app/core/store/selectors/user.selectors';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Gradient } from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-activate-container',
  templateUrl: './activate-container.component.html',
  styleUrls: ['./activate-container.component.scss'],
})
export class ActivateContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  Gradient = Gradient;

  user$ = this.store.select(selectUser);
  user: User;

  constructor(private store: Store<{ auth: any }>) {}

  ngOnInit() {
    this.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => (this.user = user));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(confirmationCode: number) {
    this.store.dispatch(UserConfirmUsername({ payload: { confirmationCode } }));
  }

  onLinkClick() {
    this.store.dispatch(UserRequestConfirmationCode({ payload: this.user }));
  }
}
