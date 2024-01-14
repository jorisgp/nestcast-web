import { Component } from '@angular/core';
import { Gradient } from '../../../../../shared/ui-components/components/page-sections/background-section/background-section.component';
import { CallToActionView } from '../../view/call-to-action/call-to-action.component';
import { SnippetView } from '../../view/snippet/snippet.component';
import { WaitingListContainerComponent } from '../waiting-list-container/waiting-list-container.component';

@Component({
  selector: 'app-pricing-page-container',
  templateUrl: './pricing-page-container.component.html',
  styleUrls: ['./pricing-page-container.component.scss'],
})
export class PricingPageContainerComponent extends WaitingListContainerComponent {
  CallToActionView = CallToActionView;
  SnippetView = SnippetView;
  Gradient = Gradient;
}
