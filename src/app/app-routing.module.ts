import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TabsGuard } from './guards/tabs.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/landing-page/landing-page.module').then( m => m.LandingPagePageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./views/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login/reset',
    loadChildren: () => import('./views/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./views/landing-page/landing-page.module').then( m => m.LandingPagePageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./views/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('./views/about-us/about-us.module').then( m => m.AboutUsPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'iniciacion',
    loadChildren: () => import('./views/initiation/initiation.module').then( m => m.InitiationPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'arqueros',
    loadChildren: () => import('./views/archers/archers.module').then( m => m.ArchersPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'competicion',
    loadChildren: () => import('./views/competitions/competitions.module').then( m => m.CompetitionsPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'timer',
    loadChildren: () => import('./views/timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'plusmarcas',
    loadChildren: () => import('./views/records/records.module').then( m => m.RecordsPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'competiciones/:id/puntuacion/:user',
    loadChildren: () => import('./views/see-score/see-score.module').then( m => m.SeeScorePageModule)
  },
  {
    path: 'entrenamientos',
    loadChildren: () => import('./views/training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./views/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule),
    canActivate: [TabsGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./views/tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'config',
    loadChildren: () => import('./views/config/config.module').then( m => m.ConfigPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
