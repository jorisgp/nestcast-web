import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileMenu = false;
  background = false;

  constructor(private router: RouterService, private route: ActivatedRoute) {}

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      this.background = true;
    } else {
      this.background = false;
    }
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  navigate(location: string[]) {
    this.mobileMenu = false;
    this.router.navigate(location, { relativeTo: this.route });
  }
}
