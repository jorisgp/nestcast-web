import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesPageComponent } from './components/page/episodes-page/episodes-page.component';
import { ShowsPageComponent } from './components/page/shows-page/shows-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shows',
  },
  {
    path: 'shows',
    component: ShowsPageComponent,
  },
  {
    path: 'epsiodes',
    component: EpisodesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
