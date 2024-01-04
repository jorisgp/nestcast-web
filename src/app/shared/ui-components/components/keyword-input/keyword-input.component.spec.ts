import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { KeywordInputComponent } from './keyword-input.component';

describe('KeywordInputComponent', () => {
  let spectator: Spectator<KeywordInputComponent>;
  const createComponent = createComponentFactory(KeywordInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
