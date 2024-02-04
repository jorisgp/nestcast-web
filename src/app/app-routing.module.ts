import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { PrivateAppComponent } from './core/components/private-app/private-app.component';
import { PublicAppComponent } from './core/components/public-app/public-app.component';
import { ShowAppComponent } from './core/components/show-app/show-app.component';
import { languageResolver } from './core/resolvers/language.resolver';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export function checkLang(url: UrlSegment[]) {
  if (url[0]?.path?.length === 2) {
    return { consumed: [url[0]], posParams: { lang: url[0] } };
  }
  return null;
}

const publicRoutes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    component: PublicAppComponent,
    children: [
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
    ],
  },
];

const privateRoutes: Routes = [
  {
    path: 'secure',
    component: PrivateAppComponent,
    children: [
      {
        path: 'manager',
        loadChildren: () =>
          import('./features/manager/manager.module').then(
            (m) => m.ManagerModule
          ),
      },
    ],
  },
];

const showRoutes: Routes = [
  {
    path: 'show',
    component: ShowAppComponent,
    children: [
      {
        path: ':show',
        loadChildren: () =>
          import('./features/show/show.module').then((m) => m.ShowModule),
      },
    ],
  },
];

const routes: Routes = [
  {
    matcher: checkLang,
    resolve: { language: languageResolver },
    children: [...publicRoutes, ...privateRoutes, ...showRoutes],
  },
  ...publicRoutes,
  ...privateRoutes,
  ...showRoutes,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
