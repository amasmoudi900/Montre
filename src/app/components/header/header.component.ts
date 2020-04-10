import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // declare vars
  age:number;
  c:string;
  lName:string="Masmoudi";
  fName:string="Abderrahmen";
  fullName: string;
  legthFullName:number;
  res:string;
  ifFullNameReturn:boolean;
  isUserConnected: boolean;
  val:number;
  somme:number;

  //Constructor
  constructor(private router: Router) { }

  ngOnInit():void {
    this.fullName = this.concatFullName(this.fName, this.lName);
    
    console.log("Length legthFullName" , this.legthFullName);
  }

  goToSignup() {
    this.router.navigate(["signup"]);
  }

  concatFullName(a:string, b:string) {
    console.log("a+b", a+ " "+ b);
    return a+ " "+ b;
  }

  legnthFName(a:string) {
    this.legthFullName = a.length;
  }

  calcul(a:number,b:number) {
    return a+b;
  }

  lengthFullName(a:string) {
    this.res = (a.length > 20) ?  "red" : "blue";
    return this.res;
  }

  ifFullName(a:string) {
    this.ifFullNameReturn = (a.length > 20) ?  true : false;
  }

  isConnected() {
    this.isUserConnected = false;
    return this.isUserConnected;
  }

  enzel(a:number, b:number) {
    this.somme = a+b;  
  }

}
