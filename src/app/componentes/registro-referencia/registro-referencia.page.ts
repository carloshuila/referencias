import { Component, OnInit } from '@angular/core';
import { Referencia } from './../../referencia';
import { AuthService } from "../../servicio/auth.service";







@Component({
  selector: 'app-registro-referencia',
  templateUrl: './registro-referencia.page.html',
  styleUrls: ['./registro-referencia.page.scss'],
})
export class RegistroReferenciaPage implements OnInit {

  referenciaEditando: Referencia;  

  constructor(private firestoreService: AuthService) { 
        // Crear una referencia vacía
        this.referenciaEditando = {} as Referencia;
  }

  ngOnInit() {
  }

  regitrarReferencia(){
      this.firestoreService.insertar("referencia", this.referenciaEditando).then(() => {
        console.log('Referencia creada correctamente!');
        alert(' Referencia creada correctamente!')
        this.referenciaEditando= {} as Referencia;
      }, (error) => {
        console.error(error);
      });
    }

  





}
