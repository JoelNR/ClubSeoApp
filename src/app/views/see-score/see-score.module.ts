import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeScorePageRoutingModule } from './see-score-routing.module';

import { SeeScorePage } from './see-score.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ScoreModule } from 'src/app/components/score-competition/score.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeScorePageRoutingModule,
    HeaderModule,
    FooterModule,
    ScoreModule,
    NgxUiLoaderModule,
    BackButtonModule
  ],
  declarations: [SeeScorePage]
})
export class SeeScorePageModule {}
