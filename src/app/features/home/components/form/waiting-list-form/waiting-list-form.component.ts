import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-list-form',
  templateUrl: './waiting-list-form.component.html',
  styleUrls: ['./waiting-list-form.component.scss'],
})
export class WaitingListFormComponent implements OnInit {
  @Input()
  data: string;

  ngOnInit(): void {
    console.log('data', this.data);
  }
}
