import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'competiciones',
    loadChildren: () => import('./all-competitions/all-competitions.module').then( m => m.AllCompetitionsPageModule)
  },
  {
    path: 'plusmarcas',
    loadChildren: () => import('./all-records/all-records.module').then( m => m.AllRecordsPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
