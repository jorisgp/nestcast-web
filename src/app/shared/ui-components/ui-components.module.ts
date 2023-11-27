import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ContainerDirective } from '../directives/container.directive';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MapComponent } from './components/map/map.component';
import { ModalComponent } from './components/modal/modal.component';
import { BackgroundSectionComponent } from './components/page-sections/background-section/background-section.component';
import { ParagraphsComponent } from './components/paragraphs/paragraphs.component';

@NgModule({
  declarations: [
    ParagraphsComponent,
    ModalComponent,
    MapComponent,
    InputTextComponent,
    IconComponent,
    ButtonComponent,
    BackgroundSectionComponent,
    ContainerDirective,
    CardComponent,
  ],
  imports: [CommonModule, DialogModule],
  exports: [
    ParagraphsComponent,
    ModalComponent,
    MapComponent,
    InputTextComponent,
    IconComponent,
    ButtonComponent,
    BackgroundSectionComponent,
    CardComponent,
  ],
})
export class UiComponentsModule {}
