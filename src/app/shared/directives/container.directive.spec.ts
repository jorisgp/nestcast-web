import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { ContainerDirective } from './container.directive';

describe('ContainerDirective', () => {
  let spectator: SpectatorDirective<ContainerDirective>;
  const createDirective = createDirectiveFactory(ContainerDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing ContainerDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
