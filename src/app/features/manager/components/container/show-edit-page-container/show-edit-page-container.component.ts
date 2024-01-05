import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  createShow,
  updateShow,
} from 'src/app/core/store/actions/show.actions';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-edit-page-container',
  templateUrl: './show-edit-page-container.component.html',
  styleUrls: ['./show-edit-page-container.component.scss'],
})
export class ShowEditPageContainerComponent {
  constructor(private store: Store<{ show: any }>) {}

  onSubmitForm(show: Show) {
    if (!show.id) {
      this.store.dispatch(createShow({ payload: show }));
    } else {
      this.store.dispatch(updateShow({ payload: show }));
    }
  }
}
