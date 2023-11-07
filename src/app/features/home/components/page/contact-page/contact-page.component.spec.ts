import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let spectator: Spectator<ContactPageComponent>;
  const createComponent = createComponentFactory(ContactPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
