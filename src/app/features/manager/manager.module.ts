import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodesPageComponent } from './components/page/episodes-page/episodes-page.component';
import { ShowsPageComponent } from './components/page/shows-page/shows-page.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [EpisodesPageComponent, ShowsPageComponent],
  imports: [CommonModule, ManagerRoutingModule],
})
export class ManagerModule {}
