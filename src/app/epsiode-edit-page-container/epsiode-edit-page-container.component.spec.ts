import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpsiodeEditPageContainerComponent } from '../features/manager/components/container/epsiode-edit-page-container/epsiode-edit-page-container.component';

describe('EpsiodeEditPageContainerComponent', () => {
  let spectator: Spectator<EpsiodeEditPageContainerComponent>;
  const createComponent = createComponentFactory(
    EpsiodeEditPageContainerComponent
  );

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
