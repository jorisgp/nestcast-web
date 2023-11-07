import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';

import { StackImagePipePipe } from './stack-image-pipe.pipe';

describe('StackImagePipePipe ', () => {
  let spectator: SpectatorPipe<StackImagePipePipe>;
  const createPipe = createPipeFactory(StackImagePipePipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | stackImagePipe }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
