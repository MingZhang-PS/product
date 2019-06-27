import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsState } from 'src/app/states/products/products.state';
import { AddProduct } from 'src/app/states/products/products.action';

@Component({
  selector: 'app-productCreate',
  templateUrl: './productCreate.component.html',
  styleUrls: ['./productCreate.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private store: Store<ProductsState>) {
  }

  ngOnInit() {
  }

  addProduct(name: string, description: string, imageUrl: string) {
    this.store.dispatch(new AddProduct({'id':-1, 'name': name, 'description': description, 'imageUrl': imageUrl}));
  }
}
