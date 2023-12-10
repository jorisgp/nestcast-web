import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContentWrapperComponent } from './content-wrapper.component';

describe('ContentWrapperComponent', () => {
  let spectator: Spectator<ContentWrapperComponent>;
  const createComponent = createComponentFactory(ContentWrapperComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
