import {
  ComponentRef,
  EventEmitter,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from 'src/app/shared/ui-components/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef: ViewContainerRef;
  private modalReference: ComponentRef<any>;
  private modalOpen = false;

  openModal(
    component: any,
    submitEvent: EventFunction,
    submitConfirmationEvent?: EventFunction,
    data?: any,
    config?: any
  ) {
    if (!this.modalOpen) {
      this.modalOpen = true;
      this.modalReference =
        this.viewContainerRef.createComponent(ModalComponent);

      const componentReference: ComponentRef<ModalInterface> =
        this.modalReference.instance.container.viewContainerRef.createComponent(
          component
        );

      componentReference.instance.data = data;
      componentReference.instance.submitForm?.subscribe((eventData: any) => {
        submitEvent(eventData);
      });
      componentReference.instance.submitConfirmationForm?.subscribe(
        (eventData: any) => {
          submitConfirmationEvent(eventData);
        }
      );

      componentReference.instance.closeModal?.subscribe(() => {
        this.closeModal();
      });
      componentReference.instance.config = config;
    }
  }

  removeChild(): Promise<null> {
    const index = this.viewContainerRef.indexOf(this.modalReference.hostView);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (index != -1) {
          this.viewContainerRef.remove(index);
        }
        this.modalOpen = false;
        resolve(null);
      }, 300);
    });
  }

  closeModal() {
    if (this.modalReference) {
      this.modalReference.instance.closeModalFromService();
      this.removeChild();
    }
  }
}

export interface ModalInterface {
  data: any;
  config?: any;
  submitForm: EventEmitter<any>;
  submitConfirmationForm?: EventEmitter<any>;
  closeModal: EventEmitter<any>;
}

type EventFunction = (payload: any) => any;
