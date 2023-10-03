import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WaitingListFormComponent } from './waiting-list-form.component';

describe('WaitingListFormComponent', () => {
  let spectator: Spectator<WaitingListFormComponent>;
  const createComponent = createComponentFactory(WaitingListFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
