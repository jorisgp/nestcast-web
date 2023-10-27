import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileMenu = false;
  background = false;

  constructor(private router: Router) {}

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
    this.router.navigate(location);
  }
}
