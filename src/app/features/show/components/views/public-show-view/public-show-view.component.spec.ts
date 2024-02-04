import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PublicShowViewComponent } from './public-show-view.component';

describe('PublicShowViewComponent', () => {
  let spectator: Spectator<PublicShowViewComponent>;
  const createComponent = createComponentFactory(PublicShowViewComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
