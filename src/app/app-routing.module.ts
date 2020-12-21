import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./componentes/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'registro-referencia',
    loadChildren: () => import('./componentes/registro-referencia/registro-referencia.module').then( m => m.RegistroReferenciaPageModule)
  },
  {
    path: 'listar-referencia',
    loadChildren: () => import('./componentes/listar-referencia/listar-referencia.module').then( m => m.ListarReferenciaPageModule)
  },
  {
    path: 'eliminar-referencia',
    loadChildren: () => import('./componentes/eliminar-referencia/eliminar-referencia.module').then( m => m.EliminarReferenciaPageModule)
  },
  {
    path: 'actualizar-referencia',
    loadChildren: () => import('./componentes/actualizar-referencia/actualizar-referencia.module').then( m => m.ActualizarReferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
