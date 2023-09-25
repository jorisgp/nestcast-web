import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input()
  data: PricingCard;
}

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
