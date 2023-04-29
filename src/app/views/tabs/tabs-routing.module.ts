import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../landing-page/landing-page.module').then( m => m.LandingPagePageModule)
      },
      {
        path: '',
        loadChildren: () => import('../landing-page/landing-page.module').then( m => m.LandingPagePageModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('../about-us/about-us.module').then( m => m.AboutUsPageModule)
      },
      {
        path: 'iniciacion',
        loadChildren: () => import('../initiation/initiation.module').then( m => m.InitiationPageModule)
      },
      {
        path: 'arqueros',
        loadChildren: () => import('../archers/archers.module').then( m => m.ArchersPageModule)
      },
      {
        path: 'competicion',
        loadChildren: () => import('../competitions/competitions.module').then( m => m.CompetitionsPageModule)
      },
      {
        path: 'plusmarcas',
        loadChildren: () => import('../records/records.module').then( m => m.RecordsPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
      },
      {
        path: 'perfil/:id',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
