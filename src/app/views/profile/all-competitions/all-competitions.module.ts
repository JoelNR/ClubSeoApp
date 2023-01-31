import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCompetitionsPageRoutingModule } from './all-competitions-routing.module';

import { AllCompetitionsPage } from './all-competitions.page';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CompetitionResultsCardModule } from 'src/app/components/competition-results-card/competition-results-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCompetitionsPageRoutingModule,
    BackButtonModule,
    FooterModule,
    HeaderModule,
    NgxUiLoaderModule,
    CompetitionResultsCardModule
  ],
  declarations: [AllCompetitionsPage]
})
export class AllCompetitionsPageModule {}
