import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAut : AngularFireAuth) { }

  login(email:string, contrasena: string){
    this.fireAut.signInWithEmailAndPassword(email, contrasena).then(res =>{
      console.log(res);
    }).catch(err => console.log('Error: '+ err));
    

  }
}

