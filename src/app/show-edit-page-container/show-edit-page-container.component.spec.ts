import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowEditPageContainerComponent } from './show-edit-page-container.component';

describe('ShowEditPageContainerComponent', () => {
  let spectator: Spectator<ShowEditPageContainerComponent>;
  const createComponent = createComponentFactory(ShowEditPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
