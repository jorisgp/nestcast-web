import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nestcast-web';

  constructor(
    public viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.viewContainerRef = this.viewContainerRef;
  }
}
