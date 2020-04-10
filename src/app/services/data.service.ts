import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  montres =  [
    {id: 1, price: 200, marque: "Swatch", image: "test",description: "Persistent 1"},
    {id: 2, price: 300, marque: "Festina", image: "test",description: "Persistent 2"},
    {id: 3, price: 400, marque: "Citizen", image: "test",description: "Persistent 3"},
    {id: 4, price: 500, marque: "Smile", image: "test",description: "Persistent Smile"}
   ];

   let  users =  [
    {id: 1, firstName: "Abderrahmen", lastName: "Masmoudi", email: "abdou@gmail.com",password: "1234"},
    {id: 2, firstName: "Mahdi", lastName: "Lakhel", email: "mahdi@gmail.com",password: "1234"},
    {id: 3, firstName: "Iheb", lastName: "Baklouti", email: "iheb@gmail.com",password: "1234"},
    {id: 4, firstName: "Taha", lastName: "Laga", email: "taha@gmail.com",password: "1234"},
    {id: 4, firstName: "Emna", lastName: "Kassab", email: "emna@gmail.com",password: "1234"},
    {id: 4, firstName: "Amin", lastName: "Masmoudi", email: "amin@gmail.com",password: "1234"},
   ];

   return {montres, users};

  }
}