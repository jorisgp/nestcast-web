import { Component, OnDestroy, OnInit } from '@angular/core';
import { WaitingListContainerComponent } from '../waiting-list-container/waiting-list-container.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent
  extends WaitingListContainerComponent
  implements OnInit, OnDestroy {}
