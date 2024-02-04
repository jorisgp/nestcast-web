import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowPageContainerComponent } from './components/containers/show-page-container/show-page-container.component';
import { ShowPageComponent } from './components/page/show-page/show-page.component';
import { EpisodePlayerComponent } from './components/views/episode-player/episode-player.component';
import { PublicEpisodeViewComponent } from './components/views/public-episode-view/public-episode-view.component';
import { PublicShowViewComponent } from './components/views/public-show-view/public-show-view.component';
import { ShowRoutingModule } from './show-routing.module';
import { PlayButtonViewComponent } from './components/views/play-button-view/play-button-view.component';

@NgModule({
  declarations: [
    ShowPageComponent,
    ShowPageContainerComponent,
    PublicShowViewComponent,
    PublicEpisodeViewComponent,
    EpisodePlayerComponent,
    PlayButtonViewComponent,
  ],
  imports: [CommonModule, ShowRoutingModule, SharedModule],
})
export class ShowModule {}
