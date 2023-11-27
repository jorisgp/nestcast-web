import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordResetContainerComponent } from './components/container/password-reset-container/password-reset-container.component';
import { PasswordResetRequestContainerComponent } from './components/container/password-reset-request-container/password-reset-request-container.component';
import { SignInContainerComponent } from './components/container/sign-in-container/sign-in-container.component';
import { SignUpContainerComponent } from './components/container/sign-up-container/sign-up-container.component';
import { PasswordLostPageComponent } from './components/page/password-lost-page/password-lost-page.component';
import { PasswordRenewPageComponent } from './components/page/password-renew-page/password-renew-page.component';
import { SignInPageComponent } from './components/page/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';
import { PasswordResetFormComponent } from './components/view/password-reset-form/password-reset-form.component';
import { PasswordResetRequestFormComponent } from './components/view/password-reset-request-form/password-reset-request-form.component';
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
    PasswordResetRequestContainerComponent,
    PasswordResetContainerComponent,
    PasswordRenewPageComponent,
    PasswordLostPageComponent,
    PasswordResetRequestFormComponent,
    PasswordResetFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthModule {}
