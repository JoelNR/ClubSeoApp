import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TabsGuard } from './guards/tabs.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
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
    loadChildren: () => import('./views/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'iniciacion',
    loadChildren: () => import('./views/initiation/initiation.module').then( m => m.InitiationPageModule)
  },
  {
    path: 'arqueros',
    loadChildren: () => import('./views/archers/archers.module').then( m => m.ArchersPageModule)
  },
  {
    path: 'competicion',
    loadChildren: () => import('./views/competitions/competitions.module').then( m => m.CompetitionsPageModule)
  },








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
