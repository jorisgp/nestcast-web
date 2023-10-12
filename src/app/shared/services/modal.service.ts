import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../ui-components/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef: ViewContainerRef;
  private modalReference: ComponentRef<any>;
  private modalOpen = false;

  closeOpenModal(component: any, submitEvent: any, data?: any, config?: any) {
    if (this.modalOpen) {
      this.removeChild().then(() => {
        this.modalOpen = false;
        console.log('this.modalOpen', this.modalOpen);
        this.openModal(component, submitEvent, data, config);
      });
    } else {
      this.openModal(component, submitEvent, data, config);
    }
  }

  openModal(component: any, submitEvent: any, data?: any, config?: any) {
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
      componentReference.instance.closeModal?.subscribe(() => {
        this._closeModal();
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

  private _closeModal() {
    this.modalReference.instance.closeModalFromService();
    this.removeChild();
  }
}

export interface ModalInterface {
  data: any;
  config?: any;
  submitForm: any;
  closeModal: any;
}
