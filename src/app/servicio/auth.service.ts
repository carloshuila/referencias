import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { promise } from 'protractor';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAut : AngularFireAuth) { }

  login(email:string, contrasenia: string){

    return new Promise((resolve, rejected)=>{
      this.fireAut.signInWithEmailAndPassword(email, contrasenia).then(user =>{
        resolve(user);
        console.log('estas logeado');
      }).catch(err => rejected(err));

    })
  

    

  }
}

