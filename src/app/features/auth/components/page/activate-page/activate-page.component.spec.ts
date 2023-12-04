import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ActivatePageComponent } from './activate-page.component';

describe('SignUpPageComponent', () => {
  let spectator: Spectator<ActivatePageComponent>;
  const createComponent = createComponentFactory(ActivatePageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
