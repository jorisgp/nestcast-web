import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPageComponent } from './components/page/show-page/show-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowPageComponent,
  },
  {
    path: ':episodeId',
    component: ShowPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutingModule {}
