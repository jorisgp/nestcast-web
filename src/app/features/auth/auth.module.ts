import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordLostContainerComponent } from './components/container/password-lost-container/password-lost-container.component';
import { PasswordRenewContainerComponent } from './components/container/password-renew-container/password-renew-container.component';
import { SignInContainerComponent } from './components/container/sign-in-container/sign-in-container.component';
import { SignUpContainerComponent } from './components/container/sign-up-container/sign-up-container.component';
import { PasswordLostPageComponent } from './components/page/password-lost-page/password-lost-page.component';
import { PasswordRenewPageComponent } from './components/page/password-renew-page/password-renew-page.component';
import { SignInPageComponent } from './components/page/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';
import { PasswordLostFormComponent } from './components/view/password-lost-form/password-lost-form.component';
import { PasswordRenewFormComponent } from './components/view/password-renew-form/password-renew-form.component';
import { SignInComponent } from './components/view/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/view/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    SignInContainerComponent,
    SignInComponent,
    SignUpContainerComponent,
    SignUpFormComponent,
    PasswordLostContainerComponent,
    PasswordRenewContainerComponent,
    PasswordRenewPageComponent,
    PasswordLostPageComponent,
    PasswordLostFormComponent,
    PasswordRenewFormComponent,
  ],
  imports: [CommonModule, FormsModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
