import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionDetailPage } from './competition-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionDetailPageRoutingModule {}
