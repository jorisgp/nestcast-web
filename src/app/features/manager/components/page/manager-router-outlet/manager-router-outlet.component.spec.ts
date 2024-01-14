import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ManagerRouterOutletComponent } from './manager-router-outlet.component';

describe('ManagerRouterOutletComponent', () => {
  let spectator: Spectator<ManagerRouterOutletComponent>;
  const createComponent = createComponentFactory(ManagerRouterOutletComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
