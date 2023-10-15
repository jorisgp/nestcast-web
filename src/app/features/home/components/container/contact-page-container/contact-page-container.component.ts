import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  addToContact,
  confirmContact,
} from 'src/app/core/store/actions/contact.actions';
import {
  selectContact,
  selectContactError,
} from 'src/app/core/store/selectors/contacts.selectors';
import {
  Contact,
  ContactDetails,
} from 'src/app/shared/interfaces/auth.interface';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Gradient } from '../../view/background-section/background-section.component';
import { ContactFlowComponent } from '../../view/contact-flow/contact-flow.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-contact-page-container',
  templateUrl: './contact-page-container.component.html',
  styleUrls: ['./contact-page-container.component.scss'],
})
export class ContactPageContainerComponent {
  private destroy$ = new Subject<void>();
  data: ContactDetails;

  selectContact$ = this.store.select(selectContact);
  selectContactError$ = this.store.select(selectContactError);

  SnippetView = SnippetView;
  Gradient = Gradient;

  constructor(
    private modalService: ModalService,
    private store: Store<{ contact: any }>
  ) {}

  ngOnInit() {
    this.selectContact$.pipe(takeUntil(this.destroy$)).subscribe((contact) => {
      this.data = contact;
    });

    this.selectContactError$
      .pipe(takeUntil(this.destroy$))
      .subscribe((error) => {
        this.modalService.removeChild();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  openContactModal() {
    this._openContactModal();
  }

  private _onSubmitContact(contact: Contact) {
    this.store.dispatch(addToContact({ payload: contact }));
  }

  private _onSubmitConfirmContact(confirmationCode: number) {
    this.store.dispatch(
      confirmContact({
        payload: { id: this.data.id, confirmationCode, confirmed: true },
      })
    );
    this.modalService.closeModal();
  }

  private _openContactModal() {
    this.modalService.openModal(
      ContactFlowComponent,
      (contactFrom: Contact) => this._onSubmitContact(contactFrom),
      (confirmationCode: number) =>
        this._onSubmitConfirmContact(confirmationCode)
    );
  }
}
