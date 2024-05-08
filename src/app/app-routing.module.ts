import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./views/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./views/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'construccion',
    loadChildren: () => import('./views/constructionpage/constructionpage.module').then( m => m.ConstructionpagePageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./views/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'iniciacion',
    loadChildren: () => import('./views/initiation/initiation.module').then( m => m.InitiationPageModule)
  },
  {
    path: 'competicion',
    loadChildren: () => import('./views/competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./views/timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'plusmarcas',
    loadChildren: () => import('./views/records/records.module').then( m => m.RecordsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
