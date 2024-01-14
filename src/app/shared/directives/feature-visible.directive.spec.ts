import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { FeatureVisibleDirective } from './feature-visible.directive';

describe('FeatureVisibleDirective', () => {
  let spectator: SpectatorDirective<FeatureVisibleDirective>;
  const createDirective = createDirectiveFactory(FeatureVisibleDirective);

  it('should change the background color', () => {
    spectator = createDirective(
      `<div highlight>Testing FeatureVisibleDirective</div>`
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
