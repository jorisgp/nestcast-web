import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StackCategoryComponent } from '../features/home/components/view/stack-category/stack-category.component';

describe('StackCategoryComponent', () => {
  let spectator: Spectator<StackCategoryComponent>;
  const createComponent = createComponentFactory(StackCategoryComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
