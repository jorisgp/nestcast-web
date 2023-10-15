import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WaitingListFlowComponent } from './waiting-list-flow.component';

describe('WaitingListFlowComponent', () => {
  let spectator: Spectator<WaitingListFlowComponent>;
  const createComponent = createComponentFactory(WaitingListFlowComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
