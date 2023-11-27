import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nestcast-web';

  constructor(
    public viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.viewContainerRef = this.viewContainerRef;
  }
}
