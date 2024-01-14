import { Component, HostListener } from '@angular/core';
import { Feature } from 'src/environments/environment.model';
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

  Feature = Feature;

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

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  navigate(location: string[]) {
    this.mobileMenu = false;
    this.router.navigate(location);
  }
}
