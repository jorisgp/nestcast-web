import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { languageResolver } from './core/resolvers/language.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ':lang',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    resolve: { language: languageResolver },
  },
  {
    path: 'auth',
    data: { reuse: true },
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    data: { reuse: true },
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
