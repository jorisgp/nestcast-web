import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { CodeConfirmationComponent } from './components/code-confirmation/code-confirmation.component';
import { FlagComponent } from './components/flag/flag.component';
import { ContainerDirective } from './directives/container.directive';
import { NestCastHttpService } from './services/nest-cast-http.service';
import { ButtonComponent } from './ui-components/components/button/button.component';
import { IconComponent } from './ui-components/components/icon/icon.component';
import { InputTextComponent } from './ui-components/components/input-text/input-text.component';
import { MapComponent } from './ui-components/components/map/map.component';
import { ModalComponent } from './ui-components/components/modal/modal.component';
import { ParagraphsComponent } from './ui-components/components/paragraphs/paragraphs.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    ParagraphsComponent,
    IconComponent,
    MapComponent,
    ModalComponent,
    ContainerDirective,
    FlagComponent,
    CodeConfirmationComponent,
  ],
  imports: [CommonModule, DialogModule, ReactiveFormsModule],
  exports: [
    TranslateModule,
    ParagraphsComponent,
    IconComponent,
    MapComponent,
    FlagComponent,
    CodeConfirmationComponent,
  ],
})
export class SharedModule {}
export { NestCastHttpService };
