import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatePageComponent } from './components/page/activate-page/activate-page.component';
import { PasswordLostPageComponent } from './components/page/password-lost-page/password-lost-page.component';
import { PasswordRenewPageComponent } from './components/page/password-renew-page/password-renew-page.component';
import { SignInPageComponent } from './components/page/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignInPageComponent,
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'password-lost',
    component: PasswordLostPageComponent,
  },
  {
    path: 'password-renew/:token',
    component: PasswordRenewPageComponent,
  },
  {
    path: 'activate',
    component: ActivatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
