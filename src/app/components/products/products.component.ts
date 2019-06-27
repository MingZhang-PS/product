import { Component, OnInit, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { SelectProduct } from './../../states/products/products.action';
import { ProductsState } from '../../states/products/products.state';
import * as ProductsSelectors from 'src/app/states/products/products.selector';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>, private productsService: ProductsService) {
    this.products$ = this.store.pipe(select(ProductsSelectors.selectAllProducts));
  }

  ngOnInit() {
    this.productsService.loadProducts();
  }

  selectProduct(product: Product) {
    this.store.dispatch(new SelectProduct(product));
  }
}
