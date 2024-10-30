import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto, Rating } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[]= [];
  ratingMioSito: Rating = {
    count: 799, rate: 5
  }
  constructor(private ps:ProdottiService) {}
  ngOnInit(): void {
   this.ps.getProdotti().subscribe(dati => {
   this.prodotti=dati;
  });
}
}
