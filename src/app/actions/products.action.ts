
import { Action } from '@ngrx/store';
import { Product } from '../models/Product';


export enum ProductsActionTypes {
    LoadProducts = '[Products] LoadProducts',
    AddProduct = '[Products] AddProduct',
    AddProductSuccess = '[Products] AddProductSuccess',
    DeleteProduct = '[Products] DeleteProduct',
    UpdateProduct = '[Products] UpdateProduct',
    SelectProduct = '[Products] SelectProduct',
    LoadProductsSuccess = '[Products] LoadProductsSuccess',
    SearchProduct = '[Products] SearchProduct'
}

export class LoadProducts implements Action {
    readonly type = ProductsActionTypes.LoadProducts;
}

export class AddProduct implements Action {
    readonly type = ProductsActionTypes.AddProduct;
    constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
    readonly type = ProductsActionTypes.AddProductSuccess;
    constructor(public payload: Product) {}
}

export class DeleteProduct implements Action {
    readonly type = ProductsActionTypes.DeleteProduct;
    constructor(public productId: number) {}
}

export class UpdateProduct implements Action {
    readonly type = ProductsActionTypes.UpdateProduct;
    constructor(public payload: Product) {}
}

export class SearchProduct implements Action {
    readonly type = ProductsActionTypes.SearchProduct;
    constructor(public searchTerm: string) {}
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductsActionTypes.LoadProductsSuccess;
    constructor(public payload: Product[]) {}
}

export class SelectProduct implements Action {
    readonly type = ProductsActionTypes.SelectProduct;
    constructor(public payload: Product) {}
}

export type ProductsActions = LoadProducts | LoadProductsSuccess | AddProduct | AddProductSuccess | DeleteProduct | UpdateProduct |
SearchProduct | SelectProduct;
