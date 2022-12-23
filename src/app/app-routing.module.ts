import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), 
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout/:sure',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'citologias',
    loadChildren: () => import('./pages/citologias/citologias.module').then( m => m.CitologiasPageModule)
  },
  {
    path: 'cito-pacientes',
    loadChildren: () => import('./pages/cito-pacientes/cito-pacientes.module').then( m => m.CitoPacientesPageModule)
  },
  {
    path: 'cito-pacientes-detail/:id',
    loadChildren: () => import('./pages/cito-pacientes-detail/cito-pacientes-detail.module').then( m => m.CitoPacientesDetailPageModule)
  },
  {
    path: 'cito-pac-archivo',
    loadChildren: () => import('./pages/cito-pac-archivo/cito-pac-archivo.module').then( m => m.CitoPacArchivoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
