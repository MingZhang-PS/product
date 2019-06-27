import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Product } from '../models/Product';
import { ProductsActionTypes } from '../states/products/products.action';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = './products';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private store$: Store<Product[]>) { }

  loadProducts(): void {
    this.http
      .get<Product[]>(this.apiUrl, { headers: this.headers })
      .subscribe(resp => {
        this.store$.dispatch({ type: ProductsActionTypes.LoadProducts, payload: resp });
      });
  }

}
