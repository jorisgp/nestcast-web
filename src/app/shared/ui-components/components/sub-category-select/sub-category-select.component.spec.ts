import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SubCategorySelectComponent } from './sub-category-select.component';

describe('SubCategorySelectComponent', () => {
  let spectator: Spectator<SubCategorySelectComponent>;
  const createComponent = createComponentFactory(SubCategorySelectComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
