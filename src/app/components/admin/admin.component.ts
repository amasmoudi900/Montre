import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/montre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  montres: Montre[];
  constructor(private montreService: MontreService,
    private router: Router) { }

  ngOnInit() {
    this.montreService.getMontres().subscribe(
      data => {
        this.montres = data;
        console.log("Here mes montres", this.montres);
      }
    )
  }
  display(montre: Montre): void {
    let link = [`montres/${montre.id}`];
    this.router.navigate(link);
  }

  edit(montre: Montre): void {
    let link = [`updateMontre/${montre.id}`];
    this.router.navigate(link);
  }

  delete(montre: Montre): void {
    this.montreService.deleteMontre(montre).subscribe(
      reponse => {
        const link = [`/admin`];
        this.router.navigate(link);
        this.getAllMontres();
      }
    );
  }

  getAllMontres(): void {
    this.montreService.getMontres().subscribe(
      data => this.montres = data);
  }
}
