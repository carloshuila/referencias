import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroReferenciaPage } from './registro-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroReferenciaPageRoutingModule {}
