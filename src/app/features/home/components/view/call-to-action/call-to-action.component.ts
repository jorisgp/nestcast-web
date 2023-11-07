import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent {
  @Input()
  data: any;

  @Output()
  buttonClick = new EventEmitter<void>();

  @Input()
  view = CallToActionView.RIGHT;

  @Input()
  color = CallToActionColor.LIGHT;

  CallToActionView = CallToActionView;
  CallToActionColor = CallToActionColor;
}

export type CallToAction = {
  title: string;
  text: string[] | string;
  images: string[];
};

export enum CallToActionView {
  LEFT,
  RIGHT,
}

export enum CallToActionColor {
  LIGHT,
  DARK,
}
