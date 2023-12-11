import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createShow } from 'src/app/core/store/actions/show.actions';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-edit-page-container',
  templateUrl: './show-edit-page-container.component.html',
  styleUrls: ['./show-edit-page-container.component.scss'],
})
export class ShowEditPageContainerComponent {
  constructor(private store: Store<{ show: any }>) {}

  onSubmitForm(show: Show) {
    this.store.dispatch(createShow({ payload: show }));
  }
}
