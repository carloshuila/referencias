import { Component, OnInit } from '@angular/core';
import { Referencia } from './../../referencia';
import { AuthService } from "../../servicio/auth.service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro-referencia',
  templateUrl: './registro-referencia.page.html',
  styleUrls: ['./registro-referencia.page.scss'],
})

export class RegistroReferenciaPage implements OnInit {

  referenciaEditando: Referencia;  

  constructor(private firestoreService: AuthService, private alertController: AlertController) { 
        // Crear una referencia vacía
        this.referenciaEditando = {} as Referencia;
        
  }

  ngOnInit() {
  }

  async regitrarReferencia(){

    let alert = await  this.alertController.create({
      message: 'Referencia creada correctamente!?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
               // AquÍ Registramos la referencia en la base de datos
               this.firestoreService.insertar("referencia", this.referenciaEditando).then(() => {
                console.log('Referencia creada correctamente!');             
                this.referenciaEditando= {} as Referencia;
              }, (error) => {
                console.error(error);
              });

           }
        }
      ]
    });

    await   alert.present();
 }
  
  
  /*{
      this.firestoreService.insertar("referencia", this.referenciaEditando).then(() => {
        console.log('Referencia creada correctamente!');
        
        alert(' Referencia creada correctamente!')
        this.referenciaEditando= {} as Referencia;
      }, (error) => {
        console.error(error);
      });
    }*/

}
