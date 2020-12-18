import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAut : AngularFireAuth, private angularFirestore: AngularFirestore ) { }

  login(email:string, contrasenia: string){

    return new Promise((resolve, rejected)=>{
      this.fireAut.signInWithEmailAndPassword(email, contrasenia).then(user =>{
        resolve(user);
        console.log('estas logeado');
      }).catch(err => rejected(err));

    })
  }

  
  registroUser(email : string, contrasenia : string){
    return new Promise((resolve, rejected)=>{
      this.fireAut.createUserWithEmailAndPassword(email, contrasenia).then(res =>{
        resolve(res);
        console.log('estas registro usuario');
      }).catch(err => rejected(err));
    })
  }

  public insertar(coleccion, datos) {
    return this.angularFirestore.collection(coleccion).add(datos);
  } 

 






}


