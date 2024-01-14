import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { LanguageSelectComponent } from './language-select.component';

describe('LanguageSelectComponent', () => {
  let spectator: Spectator<LanguageSelectComponent>;
  const createComponent = createComponentFactory(LanguageSelectComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
