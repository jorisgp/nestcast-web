import { Component, Input, ViewChild } from '@angular/core';
import { ContainerDirective } from 'src/app/shared/directives/container.directive';
import { ModalService } from 'src/app/shared/services/modal.service';

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
}
