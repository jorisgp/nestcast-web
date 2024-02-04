import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ShowPageContainerComponent } from './show-page-container.component';

describe('ShowPageContainerComponent', () => {
  let spectator: Spectator<ShowPageContainerComponent>;
  const createComponent = createComponentFactory(ShowPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
