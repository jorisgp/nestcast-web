import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  addToWaitingList,
  confirmWaitingList,
} from 'src/app/core/store/actions/waiting-list.actions';
import {
  selectWaitingList,
  selectWaitingListError,
} from 'src/app/core/store/selectors/waiting-list.selectors';
import {
  WaitingList,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Gradient } from '../../view/background-section/background-section.component';
import { SnippetView } from '../../view/snippet/snippet.component';
import { WaitingListFlowComponent } from '../../view/waiting-list-flow/waiting-list-flow.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  data: WaitingListDetails;

  selectWaitingList$ = this.store.select(selectWaitingList);
  selectWaitingListError$ = this.store.select(selectWaitingListError);

  SnippetView = SnippetView;
  Gradient = Gradient;

  constructor(
    private modalService: ModalService,
    private store: Store<{ waitingList: any }>
  ) {}

  ngOnInit() {
    this.selectWaitingList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((waitingList) => {
        this.data = waitingList;
      });

    this.selectWaitingListError$
      .pipe(takeUntil(this.destroy$))
      .subscribe((error) => {
        if (error) {
          this.modalService.removeChild();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  openWaitingListModal() {
    this._openWaitingListModal();
  }

  private _onSubmitWaitinglist(waitingList: WaitingList) {
    this.store.dispatch(addToWaitingList({ payload: waitingList }));
  }

  private _onSubmitConfirmWaitinglist(confirmationCode: number) {
    this.store.dispatch(
      confirmWaitingList({
        payload: { id: this.data.id, confirmationCode, confirmed: true },
      })
    );
    this.modalService.closeModal();
  }

  private _openWaitingListModal() {
    this.modalService.openModal(
      WaitingListFlowComponent,
      (waitingListFrom: WaitingList) =>
        this._onSubmitWaitinglist(waitingListFrom),
      (confirmationCode: number) =>
        this._onSubmitConfirmWaitinglist(confirmationCode)
    );
  }
}
