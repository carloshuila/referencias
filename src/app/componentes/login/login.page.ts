import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService){ }

  ngOnInit() {
  }

  validarLogin(){
    console.log(' esta en validar login');

  }

}
