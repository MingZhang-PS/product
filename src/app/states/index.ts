import { ActionReducerMap } from '@ngrx/store';
import { ProductsState } from './products/products.state';
import { reducer as productsReducer } from './products/products.reducer';

export interface IState {
    products: ProductsState;
}

export const reducers: ActionReducerMap<IState> = {
    products: productsReducer
}

