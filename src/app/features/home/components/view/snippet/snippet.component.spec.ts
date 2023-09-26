import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SnippetComponent } from './snippet.component';

describe('SnippetComponent', () => {
  let spectator: Spectator<SnippetComponent>;
  const createComponent = createComponentFactory(SnippetComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
