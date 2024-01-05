import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  createShow,
  fetchShow,
  updateShow,
} from 'src/app/core/store/actions/show.actions';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-edit-page-container',
  templateUrl: './show-edit-page-container.component.html',
  styleUrls: ['./show-edit-page-container.component.scss'],
})
export class ShowEditPageContainerComponent implements OnInit {
  show$ = this.store.select(selectShow);

  constructor(private store: Store<{ show: any }>) {}

  ngOnInit(): void {
    this.fetchShow();
  }

  fetchShow() {
    this.store.dispatch(fetchShow({ payload: null }));
  }

  onSubmitForm(show: Show) {
    if (!show.id) {
      this.store.dispatch(createShow({ payload: show }));
    } else {
      const { id, ...updatedShow } = show;
      this.store.dispatch(
        updateShow({ showId: show.id, payload: updatedShow })
      );
    }
  }
}
