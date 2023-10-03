import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageContainerComponent } from './components/container/about-page-container/about-page-container.component';
import { ContactPageContainerComponent } from './components/container/contact-page-container/contact-page-container.component';
import { LandingPageContainerComponent } from './components/container/landing-page-container/landing-page-container.component';
import { PricingPageContainerComponent } from './components/container/pricing-page-container/pricing-page-container.component';
import { AboutPageComponent } from './components/page/about-page/about-page.component';
import { ContactPageComponent } from './components/page/contact-page/contact-page.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { PricingPageComponent } from './components/page/pricing-page/pricing-page.component';
import { BackgroundSectionComponent } from './components/view/background-section/background-section.component';
import { CallToActionComponent } from './components/view/call-to-action/call-to-action.component';
import { ColorSectionComponent } from './components/view/color-section/color-section.component';
import { HalfPhotoSectionComponent } from './components/view/half-photo-section/half-photo-section.component';
import { PricingCardComponent } from './components/view/pricing-card/pricing-card.component';
import { SnippetComponent } from './components/view/snippet/snippet.component';
import { StackCategoryComponent } from './components/view/stack-category/stack-category.component';
import { StackItemComponent } from './components/view/stack-item/stack-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { StackImagePipePipe } from './pipes/stack-image-pipe.pipe';
import { WaitingListFormComponent } from './components/form/waiting-list-form/waiting-list-form.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BackgroundSectionComponent,
    LandingPageContainerComponent,
    HalfPhotoSectionComponent,
    ColorSectionComponent,
    CallToActionComponent,
    StackItemComponent,
    StackCategoryComponent,
    StackImagePipePipe,
    PricingCardComponent,
    AboutPageComponent,
    PricingPageComponent,
    ContactPageComponent,
    AboutPageContainerComponent,
    PricingPageContainerComponent,
    ContactPageContainerComponent,
    SnippetComponent,
    WaitingListFormComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
