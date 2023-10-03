import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  ComponentRef,
  EnvironmentInjector,
  Inject,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from '../ui-components/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  viewContainerRef!: ViewContainerRef;
  reference: ComponentRef<any>;
  modalOpen = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: EnvironmentInjector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // openModal(component: any) {
  //   if (!this.modalOpen) {
  //     this.modalOpen = true;
  //     console.log(component);

  //     const dialogRef = createComponent(component, {
  //       environmentInjector: this.injector,
  //     });

  //     this.reference = this.viewContainerRef.createComponent(ModalComponent, {
  //       projectableNodes: component,
  //     });
  //   }
  // }

  open<T>(content: any, data?: any) {
    this.modalOpen = true;
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

    const ngContent = this.resolveNgContent(content, data);
    this.reference = this.viewContainerRef.createComponent(
      component,
      ngContent
    );
    this.reference.instance.data = data;

    const componentRef = factory.create(this.injector, ngContent);

    this.reference = componentRef;

    console.log(this.reference);

    this.viewContainerRef.insert(componentRef.hostView);
  }

  resolveNgContent<T>(content: any, data: any) {
    console.log(data);
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(content);
    const componentRef: ComponentRef<any> = factory.create(this.injector);

    componentRef.setInput('data', data);

    return [
      [componentRef],
      [this.document.createTextNode('Second ng-content')],
    ];
  }

  close() {
    const index = this.viewContainerRef.indexOf(this.reference.hostView);
    if (index != -1) {
      this.viewContainerRef.remove(index);
      this.modalOpen = false;
    }
  }
}
