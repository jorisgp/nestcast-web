import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ParagraphsComponent } from './paragraphs.component';

describe('ParagraphsComponent', () => {
  let spectator: Spectator<ParagraphsComponent>;
  const createComponent = createComponentFactory(ParagraphsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
