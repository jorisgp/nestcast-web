import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { EpisodesPageComponent } from './components/page/episodes-page/episodes-page.component';
import { ShowsPageComponent } from './components/page/shows-page/shows-page.component';

@NgModule({
  declarations: [EpisodesPageComponent, ShowsPageComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
