import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarReferenciaPage } from './actualizar-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarReferenciaPageRoutingModule {}
