import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';

import { DropFileDirective } from './drop-file.directive';

describe('DropFileDirective', () => {
  let spectator: SpectatorDirective<DropFileDirective>;
  const createDirective = createDirectiveFactory(DropFileDirective);

  xit('should change the background color', () => {
    spectator = createDirective(
      `<div highlight>Testing DropFileDirective</div>`
    );

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)',
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff',
    });
  });
});
