import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionPageComponent } from './components/page/distribution-page/distribution-page.component';
import { ManagerRouterOutletComponent } from './components/page/manager-router-outlet/manager-router-outlet.component';
import { SettingsPageComponent } from './components/page/settings-page/settings-page.component';
import { ShowEditPageComponent } from './components/page/show-edit-page/show-edit-page.component';
import { ShowPageComponent } from './components/page/show-page/show-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerRouterOutletComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'show',
      },
      {
        path: 'show',
        component: ShowPageComponent,
      },
      {
        path: 'show/edit/:id',
        component: ShowEditPageComponent,
      },
      {
        path: 'distribution',
        component: DistributionPageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
