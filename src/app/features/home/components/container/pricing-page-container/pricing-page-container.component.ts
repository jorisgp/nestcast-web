import { Component } from '@angular/core';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-pricing-page-container',
  templateUrl: './pricing-page-container.component.html',
  styleUrls: ['./pricing-page-container.component.scss'],
})
export class PricingPageContainerComponent {
  SnippetView = SnippetView;
}
