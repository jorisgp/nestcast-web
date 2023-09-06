import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInContainerComponent } from './components/container/sign-in-container/sign-in-container.component';
import { SignInPageComponent } from './components/page/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';
import { SignInComponent } from './components/view/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent,
    SignInContainerComponent,
    SignInComponent,
  ],
  imports: [CommonModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
