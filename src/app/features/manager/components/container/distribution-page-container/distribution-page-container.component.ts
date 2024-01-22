import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchShow } from 'src/app/core/store/actions/show.actions';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';

@Component({
  selector: 'app-distribution-page-container',
  templateUrl: './distribution-page-container.component.html',
  styleUrls: ['./distribution-page-container.component.scss'],
})
export class DistributionPageContainerComponent implements OnInit {
  show$ = this.store.select(selectShow);

  constructor(private store: Store<{ show: any }>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchShow({ payload: null }));
  }
}
