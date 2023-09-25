import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContactPageContainerComponent } from './contact-page-container.component';

describe('ContactPageContainerComponent', () => {
  let spectator: Spectator<ContactPageContainerComponent>;
  const createComponent = createComponentFactory(ContactPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
