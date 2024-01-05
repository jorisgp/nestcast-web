import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodeEditPageContainerComponent } from './episode-edit-page-container.component';

describe('EpisodeEditPageContainerComponent', () => {
  let spectator: Spectator<EpisodeEditPageContainerComponent>;
  const createComponent = createComponentFactory(
    EpisodeEditPageContainerComponent
  );

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
