import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRecordsPage } from './all-records.page';

const routes: Routes = [
  {
    path: '',
    component: AllRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRecordsPageRoutingModule {}
