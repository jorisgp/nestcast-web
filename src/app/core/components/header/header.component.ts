import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../../services/platform.service';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileMenu = false;
  background = false;

  constructor(
    private router: RouterService,
    private route: ActivatedRoute,
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

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  navigate(location: string[]) {
    this.mobileMenu = false;
    this.router.navigate(location);
  }
}
