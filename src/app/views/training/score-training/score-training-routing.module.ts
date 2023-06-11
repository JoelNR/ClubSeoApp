import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreTrainingPage } from './score-training.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreTrainingPageRoutingModule {}
