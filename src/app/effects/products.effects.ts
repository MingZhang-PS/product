import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/products.action';
import { ProductsService } from '../services/products.service';
import { AddProduct } from '../actions/products.action';


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  @Effect()
  loadAllProducts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProductsActionTypes.LoadProducts),
    switchMap(() =>
        this.productService.loadProducts().pipe(
          map(data => new fromActions.LoadProductsSuccess(data))
        )
      )
  );

  @Effect()
  AddProducts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProductsActionTypes.AddProduct),
    switchMap((action: AddProduct) =>
        this.productService.addProduct(action.payload).pipe(
          map(data => new fromActions.AddProductSuccess(data))
        )
      )
  );
}
