import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchersPage } from './archers.page';

const routes: Routes = [
  {
    path: '',
    component: ArchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchersPageRoutingModule {}
