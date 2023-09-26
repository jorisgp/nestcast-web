import { Component } from '@angular/core';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-about-page-container',
  templateUrl: './about-page-container.component.html',
  styleUrls: ['./about-page-container.component.scss'],
})
export class AboutPageContainerComponent {
  SnippetView = SnippetView;
}
