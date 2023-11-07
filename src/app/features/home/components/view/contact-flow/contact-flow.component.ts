import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-contact-flow',
  templateUrl: './contact-flow.component.html',
  styleUrls: ['./contact-flow.component.scss'],
})
export class ContactFlowComponent {
  private destroy$ = new Subject<void>();

  data: any;
  config?: any;

  @Output()
  submitForm = new EventEmitter<Contact>();

  @Output()
  submitConfirmationForm = new EventEmitter<number>();

  @Output()
  closeModal = new EventEmitter<void>();

  @Input()
  step = ContactFlowStep.CONTACT;

  ContactFlowStep = ContactFlowStep;

  ngOnInit() {
    this.submitForm.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.step = ContactFlowStep.CONTACT_CONFIRMATION;
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
    this.step = ContactFlowStep.CONTACT;
  }
}

export enum ContactFlowStep {
  CONTACT = 1,
  CONTACT_CONFIRMATION = 2,
}
