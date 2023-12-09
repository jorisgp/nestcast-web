import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  done = false;
  title = 'nestcast-web';

  @ViewChild(RouterOutlet)
  outlet: RouterOutlet;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modalService.viewContainerRef = this.viewContainerRef;

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((e) => {
      if (e instanceof ActivationStart && e.snapshot.outlet === 'primary') {
        if (!this.done) {
          this.outlet.deactivate();
          this.done = true;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
