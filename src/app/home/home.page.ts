import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ir_registrar(){
    this.router.navigateByUrl('/registro-referencia');
  }

}
