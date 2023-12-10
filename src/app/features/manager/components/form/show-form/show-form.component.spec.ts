import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowFormComponent } from './show-form.component';

describe('ShowFormComponent', () => {
  let spectator: Spectator<ShowFormComponent>;
  const createComponent = createComponentFactory(ShowFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
