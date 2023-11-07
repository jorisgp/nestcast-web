import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CallToActionComponent } from './call-to-action.component';

describe('CallToActionComponent', () => {
  let spectator: Spectator<CallToActionComponent>;
  const createComponent = createComponentFactory(CallToActionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
