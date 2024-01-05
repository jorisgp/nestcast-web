import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowPageContainerComponent } from './components/container/show-page-container/show-page-container.component';
import { HeaderPrivateComponent } from './components/core/header-private/header-private.component';
import { MenuComponent } from './components/core/menu/menu.component';
import { DistributionPageComponent } from './components/page/distribution-page/distribution-page.component';
import { ManagerRouterOutletComponent } from './components/page/manager-router-outlet/manager-router-outlet.component';
import { SettingsPageComponent } from './components/page/settings-page/settings-page.component';
import { ShowPageComponent } from './components/page/show-page/show-page.component';
import { ContentWrapperComponent } from './components/view/content-wrapper/content-wrapper.component';
import { UserAvatarComponent } from './components/view/user-avatar/user-avatar.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ShowEditPageComponent } from './components/page/show-edit-page/show-edit-page.component';
import { ShowEditPageContainerComponent } from './components/container/show-edit-page-container/show-edit-page-container.component';
import { EpsiodeEditPageContainerComponent } from './components/container/epsiode-edit-page-container/epsiode-edit-page-container.component';
import { ShowFormComponent } from './components/form/show-form/show-form.component';
import { EpisodeFormComponent } from './components/form/episode-form/episode-form.component';

@NgModule({
  declarations: [
    ShowPageComponent,
    HeaderPrivateComponent,
    ContentWrapperComponent,
    UserAvatarComponent,
    MenuComponent,
    ManagerRouterOutletComponent,
    DistributionPageComponent,
    SettingsPageComponent,
    ShowPageContainerComponent,
    ShowEditPageComponent,
    ShowEditPageContainerComponent,
    EpsiodeEditPageContainerComponent,
    ShowFormComponent,
    EpisodeFormComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
  ],
})
export class ManagerModule {}
