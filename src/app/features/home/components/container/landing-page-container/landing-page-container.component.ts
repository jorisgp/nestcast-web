import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import {
  addToWaitingList,
  confirmToWaitingList,
} from 'src/app/core/store/actions/waiting-list.actions';
import {
  selectWaitingList,
  selectWaitingListError,
} from 'src/app/core/store/selectors/waiting-list.selectors';
import { CodeConfirmationComponent } from 'src/app/shared/components/code-confirmation/code-confirmation.component';
import {
  WaitingList,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WaitingListFormComponent } from '../../form/waiting-list-form/waiting-list-form.component';
import { Gradient } from '../../view/background-section/background-section.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent implements OnInit {
  private destroy$ = new Subject<void>();
  SnippetView = SnippetView;
  selectWaitingList$ = this.store.select(selectWaitingList);
  selectWaitingListError$ = this.store.select(selectWaitingListError);

  Gradient = Gradient;

  constructor(
    private modalService: ModalService,
    private store: Store<{ waitingList: any }>
  ) {}

  ngOnInit() {
    this.selectWaitingList$.subscribe((waitingList) => {
      console.log('waitingList', waitingList);
      if (waitingList?.id) {
        this.openCodeConfirmationModal(waitingList);
      }
    });

    this.selectWaitingListError$.subscribe((error) => {
      console.log('error', error);
    });
  }

  onSubmitWaitinglist(waitingList: WaitingList) {
    this.store.dispatch(addToWaitingList({ payload: waitingList }));
  }

  onSubmitConfirmWaitinglist(waitingList: WaitingList) {
    this.store.dispatch(confirmToWaitingList({ payload: waitingList }));
  }
  openModal() {
    this.modalService.openModal(
      WaitingListFormComponent,
      (waitingListFrom: WaitingList) =>
        this.onSubmitWaitinglist(waitingListFrom)
    );
  }

  openCodeConfirmationModal(data: WaitingListDetails) {
    this.modalService.closeOpenModal(
      CodeConfirmationComponent,
      (waitingListFrom: WaitingList) =>
        this.onSubmitConfirmWaitinglist(waitingListFrom),
      data
    );
  }
}
