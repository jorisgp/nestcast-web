import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingPageContainerComponent } from './components/container/landing-page-container/landing-page-container.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { BackgroundSectionComponent } from './components/view/background-section/background-section.component';
import { CallToActionComponent } from './components/view/call-to-action/call-to-action.component';
import { ColorSectionComponent } from './components/view/color-section/color-section.component';
import { HalfPhotoSectionComponent } from './components/view/half-photo-section/half-photo-section.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    BackgroundSectionComponent,
    LandingPageContainerComponent,
    HalfPhotoSectionComponent,
    ColorSectionComponent,
    CallToActionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
