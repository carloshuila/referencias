import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicio/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  contrasenia: string;

  constructor(private authService: AuthService, public router: Router ){ }

  ngOnInit() {
  }

  validarLogin(){
    console.log(' esta en validar login');
    this.authService.login(this.email, this.contrasenia).then(res =>{
      this.router.navigate(['/home']);

    }).catch (err => alert('Datos incorrectos o usuario no registrado'))

  }

}
