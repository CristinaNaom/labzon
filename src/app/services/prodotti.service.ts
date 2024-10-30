import { Injectable } from '@angular/core';
//import { PRODOTTI } from "../data/prodotti";
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  constructor(private http: HttpClient) { }

  prodottiACarrello: Prodotto[] = [];

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("https://fakestoreapi.com/products");
  }

  getCategories() {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories");
  }

  getProdottoById(id: string): Observable<Prodotto> {
    return this.http.get<Prodotto>("https://fakestoreapi.com/products/" + id);
  }
  aggiungiACarrello(prodotto: Prodotto) {
    if (!this.prodottiACarrello.find(p => p.id == prodotto.id)) {
      this.prodottiACarrello.push(prodotto);
    }
  }
  rimuoviDaCarrello(id: number) {

    const p = this.prodottiACarrello.find(p => p.id == id);
    if (p) {
      const i = this.prodottiACarrello.indexOf(p);
      this.prodottiACarrello.splice(i, 1);
    }
  }
}
