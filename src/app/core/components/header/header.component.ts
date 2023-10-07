import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  background = false;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      this.background = true;
    } else {
      this.background = false;
    }
  }
}
