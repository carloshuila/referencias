import { Component, OnInit } from '@angular/core';
import { Referencia } from './../../referencia';
import { AuthService } from "../../servicio/auth.service";

@Component({
  selector: 'app-eliminar-referencia',
  templateUrl: './eliminar-referencia.page.html',
  styleUrls: ['./eliminar-referencia.page.scss'],
})
export class EliminarReferenciaPage implements OnInit {

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

  idReferenciaSelec: string;

  selecReferencia(referenciaSelec) {
    console.log("Referencia seleccionada: ");
    console.log(referenciaSelec);
    this.idReferenciaSelec = referenciaSelec.id;
    this.referenciaEditando.titulopub = referenciaSelec.data.titulopub;
    this.referenciaEditando.autores = referenciaSelec.data.autores;
  
  }

  clicBotonBorrar() {
    this.firestoreService.borrar("referencia", this.idReferenciaSelec).then(() => {
      // Actualizar la lista completa
      this.obtenerListaReferencias();
      // Limpiar datos de pantalla
      this.referenciaEditando = {} as Referencia;
      alert(' Referencia Eliminada correctamente!')
    })
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
