import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ContainerDirective } from '../directives/container.directive';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { CopyBoxComponent } from './components/copy-box/copy-box.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { EpisodeTypeSelectComponent } from './components/episode-type-select/episode-type-select.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { KeywordInputComponent } from './components/keyword-input/keyword-input.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { MapComponent } from './components/map/map.component';
import { ModalComponent } from './components/modal/modal.component';
import { NumberSelectComponent } from './components/number-select/number-select.component';
import { BackgroundSectionComponent } from './components/page-sections/background-section/background-section.component';
import { ParagraphsComponent } from './components/paragraphs/paragraphs.component';
import { RoundIconButtonComponent } from './components/round-icon-button/round-icon-button.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
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
    ShowDetailsComponent,
    IconButtonComponent,
    NumberSelectComponent,
    EpisodeTypeSelectComponent,
    EpisodeDetailsComponent,
    CopyBoxComponent,
    RoundIconButtonComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClipboardModule,
  ],
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
    ShowDetailsComponent,
    IconButtonComponent,
    NumberSelectComponent,
    EpisodeTypeSelectComponent,
    EpisodeDetailsComponent,
    CopyBoxComponent,
    RoundIconButtonComponent,
  ],
})
export class UiComponentsModule {}
