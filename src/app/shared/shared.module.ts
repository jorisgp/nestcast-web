import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NestCastHttpService } from './services/nest-cast-http.service';
import { ButtonComponent } from './ui-components/components/button/button.component';
import { IconComponent } from './ui-components/components/icon/icon.component';
import { InputTextComponent } from './ui-components/components/input-text/input-text.component';
import { MapComponent } from './ui-components/components/map/map.component';
import { ParagraphsComponent } from './ui-components/components/paragraphs/paragraphs.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    ParagraphsComponent,
    IconComponent,
    MapComponent,
  ],
  imports: [CommonModule],
  exports: [TranslateModule, ParagraphsComponent, IconComponent, MapComponent],
})
export class SharedModule {}
export { NestCastHttpService };
