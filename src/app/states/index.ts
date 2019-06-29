import { ActionReducerMap } from '@ngrx/store';
import { ProductsState } from './products.state';
import { reducer as productsReducer } from '../reducers/products.reducer';

export interface IState {
    products: ProductsState;
}

export const reducers: ActionReducerMap<IState> = {
    products: productsReducer
}

