import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsState } from 'src/app/states/products.state';
import { AddProduct } from 'src/app/actions/products.action';

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
    this.store.dispatch(new AddProduct({'id': undefined, 'name': name, 'description': description, 'imageUrl': imageUrl}));
  }
}
