
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html' 
})
export class LoginComponent {
	message: string = 'Vous êtes déconnectés';
	private loginEmail: string;
	private password: string;

	constructor(private authService: AuthService, private router: Router) { }

	// Informe l'utilisateur sur son authentfication.
	setMessage() {
		this.message = this.authService.isLoggedIn ?
			'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
	}

	// Connecte l'utilisateur auprès du Guard
	login() {
		this.message = 'Tentative de connexion en cours ...';
		let userExist = this.authService.login(this.loginEmail, this.password);
		console.log("userExist", userExist);
		if (userExist){
			this.setMessage();
				// Récupère l'URL de redirection depuis le service d'authentification
				// Si aucune redirection n'a été définis, redirige l'utilisateur vers Admin.
				console.log("this.authService.redirectUrl", this.authService.redirectUrl);
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
				console.log("redirect",redirect);
				// Redirige l'utilisateur
				this.router.navigate(['/admin']);
			} else {
				this.loginEmail = '';
				this.password = '';
			};
	}

	// Déconnecte l'utilisateur
	logout() {
		this.authService.logout();
		this.setMessage();
	}
}