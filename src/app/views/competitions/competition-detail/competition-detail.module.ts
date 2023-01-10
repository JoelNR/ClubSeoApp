import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionDetailPageRoutingModule } from './competition-detail-routing.module';

import { CompetitionDetailPage } from './competition-detail.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { CompetitionCardModule } from 'src/app/components/competition-card/competition-card.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionDetailPageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule,
    CompetitionCardModule,
    NgxUiLoaderModule,
    InputModule
  ],
  declarations: [CompetitionDetailPage]
})
export class CompetitionDetailPageModule {}
