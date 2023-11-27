import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { confirmWaitingList } from 'src/app/core/store/actions/waiting-list-confirmation.actions';
import { addToWaitingList } from 'src/app/core/store/actions/waiting-list.actions';
import {
  selectWaitingList,
  selectWaitingListError,
} from 'src/app/core/store/selectors/waiting-list.selectors';
import {
  WaitingList,
  WaitingListDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { WaitingListFlowComponent } from '../../view/waiting-list-flow/waiting-list-flow.component';

@Component({
  selector: 'app-waiting-list-container',
  template: '',
})
export class WaitingListContainerComponent {
  private destroy$ = new Subject<void>();
  data: WaitingListDetails;

  selectWaitingList$ = this.store.select(selectWaitingList);
  selectWaitingListError$ = this.store.select(selectWaitingListError);

  constructor(
    private modalService: ModalService,
    private store: Store<{ waitingList: any; waitingListConfirmation: any }>
  ) {}

  ngOnInit() {
    this.selectWaitingList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((waitingList) => {
        this.data = waitingList;
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
