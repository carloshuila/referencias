import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroReferenciaPageRoutingModule } from './registro-referencia-routing.module';

import { RegistroReferenciaPage } from './registro-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroReferenciaPageRoutingModule
  ],
  declarations: [RegistroReferenciaPage]
})
export class RegistroReferenciaPageModule {}
