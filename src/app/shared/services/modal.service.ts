import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../ui-components/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef: ViewContainerRef;
  modalReference: ComponentRef<any>;
  modalOpen = false;

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
      componentReference.instance.submitEvent = submitEvent;
      componentReference.instance.config = config;
    }
  }

  removeChild() {
    const index = this.viewContainerRef.indexOf(this.modalReference.hostView);
    if (index != -1) {
      this.viewContainerRef.remove(index);
      this.modalOpen = false;
    }
  }
}

interface ModalInterface {
  data: any;
  config: any;
  submitEvent: any;
}
