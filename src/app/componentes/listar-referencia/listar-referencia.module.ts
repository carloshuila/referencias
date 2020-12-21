import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarReferenciaPageRoutingModule } from './listar-referencia-routing.module';

import { ListarReferenciaPage } from './listar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarReferenciaPageRoutingModule
  ],
  declarations: [ListarReferenciaPage]
})
export class ListarReferenciaPageModule {}
