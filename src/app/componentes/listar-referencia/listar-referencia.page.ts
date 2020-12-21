import { Component, OnInit } from '@angular/core';
import { Referencia } from './../../referencia';
import { AuthService } from "../../servicio/auth.service";


@Component({
  selector: 'app-listar-referencia',
  templateUrl: './listar-referencia.page.html',
  styleUrls: ['./listar-referencia.page.scss'],
})

export class ListarReferenciaPage implements OnInit {
  
  referenciaEditando: Referencia; 
  
  arrayColeccionReferencias: any = [{
    id: "",
    data: {} as Referencia
   }];


  constructor(private firestoreService: AuthService) { 
            // Crear una referencia vacía
            this.referenciaEditando = {} as Referencia;
            this.obtenerListaReferencias();
  }

  ngOnInit() {
  }



  obtenerListaReferencias(){
    this.firestoreService.consultar("referencia").subscribe((resultadoConsultaReferencias) => {
      this.arrayColeccionReferencias = [];
      resultadoConsultaReferencias.forEach((datosReferencia: any) => {
        this.arrayColeccionReferencias.push({
          id: datosReferencia.payload.doc.id,
          data: datosReferencia.payload.doc.data()
        });
      })
    });
  }


}
