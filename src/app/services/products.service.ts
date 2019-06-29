import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductsActionTypes } from '../actions/products.action';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = './products';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private store$: Store<Product[]>) { }

  loadProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl, { headers: this.headers });
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
    .post<Product>(this.apiUrl, product, { headers: this.headers });
  }

}
