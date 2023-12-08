import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { languageResolver } from './core/resolvers/language.resolver';

export function checkLang(url: UrlSegment[]) {
  if (url[0]?.path?.length === 2) {
    return { consumed: [url[0]], posParams: { lang: url[0] } };
  }
  return null;
}

const mainRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./features/manager/manager.module').then((m) => m.ManagerModule),
  },
];

const routes: Routes = [
  {
    matcher: checkLang,
    resolve: { language: languageResolver },
    children: mainRoutes,
  },
  ...mainRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
