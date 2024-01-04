import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ContainerDirective } from '../directives/container.directive';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { IconComponent } from './components/icon/icon.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { KeywordInputComponent } from './components/keyword-input/keyword-input.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { MapComponent } from './components/map/map.component';
import { ModalComponent } from './components/modal/modal.component';
import { BackgroundSectionComponent } from './components/page-sections/background-section/background-section.component';
import { ParagraphsComponent } from './components/paragraphs/paragraphs.component';
import { SubCategorySelectComponent } from './components/sub-category-select/sub-category-select.component';

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
    LanguageSelectComponent,
    CategorySelectComponent,
    SubCategorySelectComponent,
    KeywordInputComponent,
  ],
  imports: [CommonModule, DialogModule, ReactiveFormsModule, FormsModule],
  exports: [
    ParagraphsComponent,
    ModalComponent,
    MapComponent,
    InputTextComponent,
    IconComponent,
    ButtonComponent,
    BackgroundSectionComponent,
    CardComponent,
    LanguageSelectComponent,
    CategorySelectComponent,
    SubCategorySelectComponent,
    KeywordInputComponent,
  ],
})
export class UiComponentsModule {}
