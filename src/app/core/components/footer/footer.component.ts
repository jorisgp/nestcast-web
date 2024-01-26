import { Component } from '@angular/core';
import {
  IconSize,
  IconType,
} from 'src/app/shared/ui-components/components/icon/icon.component';
import { PlatformService } from '../../services/platform.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  IconType = IconType;
  IconSize = IconSize;

  constructor(
    private router: RouterService,
    private platformService: PlatformService
  ) {}

  get isBrowser(): boolean {
    return this.platformService.isBrowser;
  }

  navigate(location: string[]) {
    this.router.navigate(location);
  }
}
