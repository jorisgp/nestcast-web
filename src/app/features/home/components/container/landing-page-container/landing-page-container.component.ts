import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WaitingListFormComponent } from '../../form/waiting-list-form/waiting-list-form.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent {
  SnippetView = SnippetView;

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open(
      WaitingListFormComponent,
      'Sign up for the waiting list'
    );
  }
}
