import { Component } from '@angular/core';
import { Gradient } from '../../../../../shared/ui-components/components/page-sections/background-section/background-section.component';
import { SnippetView } from '../../view/snippet/snippet.component';
import { WaitingListContainerComponent } from '../waiting-list-container/waiting-list-container.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent extends WaitingListContainerComponent {
  SnippetView = SnippetView;
  Gradient = Gradient;
}
