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
  {
    path: 'cito-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/cito-pac-archivo-detail/cito-pac-archivo-detail.module').then( m => m.CitoPacArchivoDetailPageModule)
  },
  {
    path: 'vphs',
    loadChildren: () => import('./pages/vphs/vphs.module').then( m => m.VphsPageModule)
  },
  {
    path: 'vphs-pacientes',
    loadChildren: () => import('./pages/vphs-pacientes/vphs-pacientes.module').then( m => m.VphsPacientesPageModule)
  },
  {
    path: 'vphs-pacientes-detail/:id',
    loadChildren: () => import('./pages/vphs-pacientes-detail/vphs-pacientes-detail.module').then( m => m.VphsPacientesDetailPageModule)
  },
  {
    path: 'vphs-pac-archivo',
    loadChildren: () => import('./pages/vphs-pac-archivo/vphs-pac-archivo.module').then( m => m.VphsPacArchivoPageModule)
  },
  {
    path: 'vphs-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/vphs-pac-archivo-detail/vphs-pac-archivo-detail.module').then( m => m.VphsPacArchivoDetailPageModule)
  },
  {
    path: 'detecmama',
    loadChildren: () => import('./pages/detecmama/detecmama.module').then( m => m.DetecmamaPageModule)
  },
  {
    path: 'detecmama-pacientes',
    loadChildren: () => import('./pages/detecmama-pacientes/detecmama-pacientes.module').then( m => m.DetecmamaPacientesPageModule)
  },
  {
    path: 'detecmama-pacientes-detail/:id',
    loadChildren: () => import('./pages/detecmama-pacientes-detail/detecmama-pacientes-detail.module').then( m => m.DetecmamaPacientesDetailPageModule)
  },
  {
    path: 'detecmama-pac-archivo',
    loadChildren: () => import('./pages/detecmama-pac-archivo/detecmama-pac-archivo.module').then( m => m.DetecmamaPacArchivoPageModule)
  },
  {
    path: 'detecmama-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/detecmama-pac-archivo-detail/detecmama-pac-archivo-detail.module').then( m => m.DetecmamaPacArchivoDetailPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
