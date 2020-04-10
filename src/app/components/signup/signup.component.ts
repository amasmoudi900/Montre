import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userForm: FormGroup;
  user: User;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
   this.user = new User(2, '', '', '', '');
   this.createForm();
 }

  createForm() {
   this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(2)] ],
      lastName: ['', Validators.required ],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]]
   });
 }


 submitForm(test: any) {
   console.log("Object : ", this.userForm.value);
   this.userService.addUser(this.userForm.value).subscribe(
     result => {
      console.log("Added");
      this.router.navigate(['/']);
     }
   )
 }

}
