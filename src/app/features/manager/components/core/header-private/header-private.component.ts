import { Component, HostListener } from '@angular/core';
import { PlatformService } from 'src/app/core/services/platform.service';
import { RouterService } from 'src/app/core/services/router.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss'],
})
export class HeaderPrivateComponent {
  mobileMenu = false;
  background = false;

  constructor(
    private router: RouterService,
    private platformService: PlatformService
  ) {}

  @HostListener('window:scroll', ['$event'])
  addBackground(event: any) {
    if (this.platformService.isBrowser) {
      if (scrollY > 100) {
        this.background = true;
      } else {
        this.background = false;
      }
    }
  }
}
