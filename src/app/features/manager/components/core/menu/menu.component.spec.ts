import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let spectator: Spectator<MenuComponent>;
  const createComponent = createComponentFactory(MenuComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
