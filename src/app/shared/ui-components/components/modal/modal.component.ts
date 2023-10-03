import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  display = true;

  @Input()
  header: string;

  constructor(private modalService: ModalService) {}

  closeOnVisibleChange() {
    if (!this.display) {
      this.closeModal();
    }
  }

  closeModal() {
    this.display = false;
    setTimeout(() => {
      this.modalService.close();
    }, 100);
  }
}
