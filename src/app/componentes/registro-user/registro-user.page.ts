import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicio/auth.service";

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  
  email: string;
  contrasenia: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  regitrarUser(){
    console.log(' esta en registrar user');
    this.authService.registroUser(this.email, this.contrasenia).then(AuthService =>{
      console.log(this.authService);
      alert(' Usuario registrado')

    }).catch (err => console.log(err))

   }


}
