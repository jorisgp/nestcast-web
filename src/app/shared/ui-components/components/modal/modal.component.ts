import { Component, Input, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { ContainerDirective } from 'src/app/shared/directives/container.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @ViewChild(ContainerDirective, { static: true })
  container: ContainerDirective;

  @Input()
  display = true;

  @Input()
  header: string;

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.display = false;
    this.modalService.removeChild();
  }
  private closeModalFromService() {
    this.display = false;
  }
}
