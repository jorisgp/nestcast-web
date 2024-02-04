import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<PageNotFoundComponent>;
  const createComponent = createComponentFactory(PageNotFoundComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
