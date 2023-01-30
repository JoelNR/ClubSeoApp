import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCompetitionsPage } from './all-competitions.page';

const routes: Routes = [
  {
    path: '',
    component: AllCompetitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCompetitionsPageRoutingModule {}
