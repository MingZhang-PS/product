import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import * as ProductsSelectors from 'src/app/states/products/products.selector';
import { ProductsState } from 'src/app/states/products/Products.state';
import { UpdateProduct } from 'src/app/states/products/products.action';


@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private store: Store<ProductsState>) { }

  ngOnInit() {
      this.store.select(ProductsSelectors.selectActiveProductId).subscribe(
       id => this.product$ = this.store.select(ProductsSelectors.selectProductById, {id})
     );
  }

  updateProduct(id: number, name: string, description: string, imageUrl: string) {
    // console.log(id, name, description, imageUrl);
    this.store.dispatch(new UpdateProduct({'id': id, 'name': name, 'description': description, 'imageUrl': imageUrl}));
  }
}
