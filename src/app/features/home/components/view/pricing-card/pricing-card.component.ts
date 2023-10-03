import { Component, Input } from '@angular/core';
import { IconType } from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input()
  data: PricingCards;

  IconType = IconType;
}

export type PricingCards = {
  title: string;
  text: string;
  cards: PricingCard[];
};

export type PricingCard = {
  plan: Plan;
  title: string;
  price: number;
  paymentFrequency: PaymentFrequency;
  usps: string[];
};

export enum Plan {
  PERSONAL,
  BUSINESS,
}

export enum PaymentFrequency {
  MONTHLY,
  ANNUAL,
}
