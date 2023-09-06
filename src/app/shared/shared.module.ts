import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NestCastHttpService } from './services/nest-cast-http.service';
import { ButtonComponent } from './ui-components/components/button/button.component';
import { InputTextComponent } from './ui-components/components/input-text/input-text.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
export { NestCastHttpService };
