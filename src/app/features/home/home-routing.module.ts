import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/page/about-page/about-page.component';
import { ContactPageComponent } from './components/page/contact-page/contact-page.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { PricingPageComponent } from './components/page/pricing-page/pricing-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'pricing',
    component: PricingPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
