import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { LanguageSwitchComponent } from './language-switch.component';

describe('LanguageSwitchComponent', () => {
  let spectator: Spectator<LanguageSwitchComponent>;
  const createComponent = createComponentFactory(LanguageSwitchComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
