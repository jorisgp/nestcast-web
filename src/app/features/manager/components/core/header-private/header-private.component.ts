import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlatformService } from 'src/app/core/services/platform.service';
import { selectShowPrivateHeaderBackground } from 'src/app/core/store/selectors/ui.selectors';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss'],
})
export class HeaderPrivateComponent {
  showPrivateHeaderBackground$ = this.store.select(
    selectShowPrivateHeaderBackground
  );

  mobileMenu = false;
  background = false;

  constructor(
    private store: Store<{ ui: any }>,
    private platformService: PlatformService
  ) {}

  @HostListener('scroll', ['$event'])
  addBackground(event: any) {
    console.log(event);
    if (this.platformService.isBrowser) {
      if (scrollY > 100) {
        this.background = true;
      } else {
        this.background = false;
      }
    }
  }
}
