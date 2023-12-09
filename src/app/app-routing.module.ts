import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { PrivateAppComponent } from './core/components/private-app/private-app.component';
import { PublicAppComponent } from './core/components/public-app/public-app.component';
import { languageResolver } from './core/resolvers/language.resolver';

export function checkLang(url: UrlSegment[]) {
  if (url[0]?.path?.length === 2) {
    return { consumed: [url[0]], posParams: { lang: url[0] } };
  }
  return null;
}

const publicRoutes: Routes = [
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

const routes: Routes = [
  {
    matcher: checkLang,
    resolve: { language: languageResolver },
    children: [...publicRoutes, ...privateRoutes],
  },
  ...publicRoutes,
  ...privateRoutes,
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
