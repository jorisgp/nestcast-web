import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchShow } from 'src/app/core/store/actions/show.actions';
import { selectIsLoading } from 'src/app/core/store/selectors/auth.selectors';
import { selectShow } from 'src/app/core/store/selectors/show.selectors';
import { IconType } from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-show-page-container',
  templateUrl: './show-page-container.component.html',
  styleUrls: ['./show-page-container.component.scss'],
})
export class ShowPageContainerComponent implements OnInit {
  show$ = this.store.select(selectShow);
  isLoading$ = this.store.select(selectIsLoading);

  IconType = IconType;

  constructor(private store: Store<{ show: any }>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchShow({ payload: null }));
  }
}
