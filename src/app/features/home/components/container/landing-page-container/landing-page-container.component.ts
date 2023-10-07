import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToWaitingList } from 'src/app/core/store/actions/waiting-list.actions';
import {
  selectWaitingListError,
  selectWaitingListIsLoading,
} from 'src/app/core/store/selectors/waiting-list.selectors';
import { WaitingList } from 'src/app/shared/interfaces/auth.interface';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WaitingListFormComponent } from '../../form/waiting-list-form/waiting-list-form.component';
import { Gradient } from '../../view/background-section/background-section.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent {
  SnippetView = SnippetView;

  error$ = this.store.select(selectWaitingListError);
  isLoading$ = this.store.select(selectWaitingListIsLoading);
  Gradient = Gradient;

  constructor(
    private modalService: ModalService,
    private store: Store<{ waitingList: any }>
  ) {}

  onSubmit(waitingList: WaitingList) {
    this.store.dispatch(addToWaitingList({ payload: waitingList }));
  }
  openModal() {
    this.modalService.openModal(
      WaitingListFormComponent,
      (waitingListFrom: WaitingList) => this.onSubmit(waitingListFrom),
      'test test'
    );
  }
}
