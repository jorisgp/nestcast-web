import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContactFlowComponent } from './contact-flow.component';

describe('ContactFlowComponent', () => {
  let spectator: Spectator<ContactFlowComponent>;
  const createComponent = createComponentFactory(ContactFlowComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
