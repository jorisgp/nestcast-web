import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../ui-components/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef: ViewContainerRef;
  private modalReference: ComponentRef<any>;
  private modalOpen = false;

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
        this.removeChild();
      });
      componentReference.instance.closeModal?.subscribe(() => {
        this._closeModal();
      });
      componentReference.instance.config = config;
    }
  }

  removeChild() {
    const index = this.viewContainerRef.indexOf(this.modalReference.hostView);
    setTimeout(() => {
      if (index != -1) {
        this.viewContainerRef.remove(index);
      }
      this.modalOpen = false;
    }, 500);
  }

  private _closeModal() {
    this.modalReference.instance.closeModal();
  }
}

export interface ModalInterface {
  data: any;
  config?: any;
  submitForm: any;
  closeModal: any;
}
