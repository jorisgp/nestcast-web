import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let spectator: Spectator<MapComponent>;
  const createComponent = createComponentFactory(MapComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
