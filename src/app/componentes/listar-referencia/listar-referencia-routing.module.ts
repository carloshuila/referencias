import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarReferenciaPage } from './listar-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListarReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarReferenciaPageRoutingModule {}
