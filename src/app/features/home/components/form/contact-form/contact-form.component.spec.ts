import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let spectator: Spectator<ContactFormComponent>;
  const createComponent = createComponentFactory(ContactFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
