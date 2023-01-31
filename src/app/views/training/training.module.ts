import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPageRoutingModule } from './training-routing.module';

import { TrainingPage } from './training.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CompetitionResultsCardModule } from 'src/app/components/competition-results-card/competition-results-card.module';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    HeaderModule,
    FooterModule,
    BackButtonModule,
    NgxUiLoaderModule,
    CompetitionResultsCardModule,
    InputModule
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
