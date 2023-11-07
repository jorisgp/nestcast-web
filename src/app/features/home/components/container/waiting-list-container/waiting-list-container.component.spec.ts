import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WaitingListContainerComponent } from './waiting-list-container.component';

describe('WaitingListContainerComponent', () => {
  let spectator: Spectator<WaitingListContainerComponent>;
  const createComponent = createComponentFactory(WaitingListContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
