import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Episode } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-epsiode-edit-page-container',
  templateUrl: './epsiode-edit-page-container.component.html',
  styleUrls: ['./epsiode-edit-page-container.component.scss'],
})
export class EpsiodeEditPageContainerComponent {
  constructor(private store: Store<{ episode: any }>) {}

  onSubmitForm(epsiode: Episode) {
    if (!epsiode.id) {
      this.store.dispatch(createEpisode({ payload: show }));
    } else {
      this.store.dispatch(updateEpisode({ payload: show }));
    }
  }
}
