import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Feature } from 'src/environments/environment.model';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appFeatureVisible]',
})
export class FeatureVisibleDirective {
  feature: Feature;

  @Input()
  set appFeatureVisible(feature: Feature) {
    this.feature = feature;
  }

  constructor(
    public templateRef: TemplateRef<unknown>,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const visible = environment.featureFlags[this.feature].visible;
    if (!visible) {
      this._removeComponent();
    } else {
      this._showComponent();
    }
  }

  private _removeComponent(): void {
    this.viewContainerRef.clear();
  }

  private _showComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
