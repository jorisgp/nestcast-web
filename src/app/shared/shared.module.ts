import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CodeConfirmationComponent } from './components/code-confirmation/code-confirmation.component';
import { FlagComponent } from './components/flag/flag.component';
import { UiComponentsModule } from './ui-components/ui-components.module';

@NgModule({
  declarations: [CodeConfirmationComponent, FlagComponent],
  imports: [
    TranslateModule,
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    UiComponentsModule,
  ],
  exports: [
    TranslateModule,
    UiComponentsModule,
    CodeConfirmationComponent,
    FlagComponent,
  ],
})
export class SharedModule {}
