import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarReferenciaPageRoutingModule } from './actualizar-referencia-routing.module';

import { ActualizarReferenciaPage } from './actualizar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarReferenciaPageRoutingModule
  ],
  declarations: [ActualizarReferenciaPage]
})
export class ActualizarReferenciaPageModule {}
