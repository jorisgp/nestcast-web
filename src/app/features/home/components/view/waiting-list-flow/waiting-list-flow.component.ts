import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WaitingList } from 'src/app/shared/interfaces/auth.interface';
import { ModalInterface } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-waiting-list-flow',
  templateUrl: './waiting-list-flow.component.html',
  styleUrls: ['./waiting-list-flow.component.scss'],
})
export class WaitingListFlowComponent implements OnDestroy, ModalInterface {
  private destroy$ = new Subject<void>();

  data: any;
  config?: any;

  @Output()
  submitForm = new EventEmitter<WaitingList>();

  @Output()
  submitConfirmationForm = new EventEmitter<number>();

  @Output()
  closeModal = new EventEmitter<void>();

  @Input()
  step = WaitingListFlowStep.WAITNG_LIST;

  WaitingListFlowStep = WaitingListFlowStep;

  ngOnInit() {
    this.submitForm.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.step = WaitingListFlowStep.WAITNG_LIST_CONFIRMATION;
    });
  }

  onSubmitConfirmationForm(code: number) {
    this.submitConfirmationForm.emit(code);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBack() {
    this.step = WaitingListFlowStep.WAITNG_LIST;
  }
}

export enum WaitingListFlowStep {
  WAITNG_LIST = 1,
  WAITNG_LIST_CONFIRMATION = 2,
}
