import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MontreService } from 'src/app/services/montre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
  styleUrls: ['./add-montre.component.css']
})
export class AddMontreComponent implements OnInit {

  montre: Montre;
  montreForm: FormGroup;
  id: number;
  constructor(
    private montreService: MontreService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.montre = new Montre(this.id, 0 , '', '', '');
      this.montreForm = this.formBuilder.group({
        name: [''],
        price: [''],
        description: [''],
        marque: ['']

      });
  }
  saveMontre(montre: any) {
    this.montreService.addMontre(this.montre).subscribe(
      res => {
        console.log(res);
        const link = [`/admin`];
        this.router.navigate(link);
      }
    );
  }

 

}

