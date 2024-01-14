import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-public-app',
  templateUrl: './public-app.component.html',
  styleUrls: ['./public-app.component.scss'],
})
export class PublicAppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.pipe(takeUntil(this.destroy$)).subscribe((e) => {
    //   if (
    //     e instanceof ActivationStart &&
    //     e.snapshot.outlet === 'routerOutlet'
    //   ) {
    //     this.outlet.deactivate();
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
