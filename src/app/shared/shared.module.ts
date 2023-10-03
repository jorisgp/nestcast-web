import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
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
  ],
  imports: [CommonModule, DialogModule],
  exports: [TranslateModule, ParagraphsComponent, IconComponent, MapComponent],
})
export class SharedModule {}
export { NestCastHttpService };
