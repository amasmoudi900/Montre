
import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
  users: User[];
  constructor(private http: HttpClient, private uerService: UserService) {
    
}
	// Une méthode de connexion
	login(email: string, password: string): boolean {
    let userExist = false;
    // Faites votre appel à un service d'authentification...
    this.users =  [
      {id: 1, firstName: "Abderrahmen", lastName: "Masmoudi", email: "abdou@gmail.com",pwd: "1234"},
      {id: 2, firstName: "Mahdi", lastName: "Lakhel", email: "mahdi@gmail.com",pwd: "1234"},
      {id: 3, firstName: "Iheb", lastName: "Baklouti", email: "iheb@gmail.com",pwd: "1234"},
      {id: 4, firstName: "Taha", lastName: "Laga", email: "taha@gmail.com",pwd: "1234"},
      {id: 4, firstName: "Emna", lastName: "Kassab", email: "emna@gmail.com",pwd: "1234"},
      {id: 4, firstName: "Amin", lastName: "Masmoudi", email: "amin@gmail.com",pwd: "1234"},
     ]; 
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === email && this.users[i].pwd === password)     {
        userExist = true;
      }      
    }
    return userExist;
    
  }
  

	// Une méthode de déconnexion
	logout(): void {
		this.isLoggedIn = false;
  }

}