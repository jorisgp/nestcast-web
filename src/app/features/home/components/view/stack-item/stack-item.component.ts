import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss'],
})
export class StackItemComponent {
  @Input()
  data: StackItem;
}

export type StackItem = {
  type: string;
  title: string;
  text: string;
};
