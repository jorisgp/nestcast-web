import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CategorySelectComponent } from './category-select.component';

describe('CategorySelectComponent', () => {
  let spectator: Spectator<CategorySelectComponent>;
  const createComponent = createComponentFactory(CategorySelectComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
