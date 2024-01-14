import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {
  let spectator: Spectator<SettingsPageComponent>;
  const createComponent = createComponentFactory(SettingsPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
