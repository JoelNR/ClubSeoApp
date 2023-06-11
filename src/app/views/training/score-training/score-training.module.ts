import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreTrainingPageRoutingModule } from './score-training-routing.module';

import { ScoreTrainingPage } from './score-training.page';
import { ScoreModule } from 'src/app/components/score-competition/score.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreTrainingPageRoutingModule,
    ScoreModule,
    HeaderModule,
    BackButtonModule
  ],
  declarations: [ScoreTrainingPage]
})
export class ScoreTrainingPageModule {}
