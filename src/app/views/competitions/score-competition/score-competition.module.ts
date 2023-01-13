import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreCompetitionPageRoutingModule } from './score-competition-routing.module';

import { ScoreCompetitionPage } from './score-competition.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ScoreModule } from 'src/app/components/score-competition/score.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreCompetitionPageRoutingModule,
    FooterModule,
    HeaderModule,
    ScoreModule,
    BackButtonModule
  ],
  declarations: [ScoreCompetitionPage]
})
export class ScoreCompetitionPageModule {}
