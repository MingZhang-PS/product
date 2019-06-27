
import { Action } from '@ngrx/store';
import { Product } from '../../models/Product';


export enum ProductsActionTypes {
    LoadProducts = '[Products] LoadProducts',
    AddProduct = '[Products] AddProduct',
    DeleteProduct = '[Products] DeleteProduct',
    UpdateProduct = '[Products] UpdateProduct',
    SelectProduct = '[Products] SelectProduct',
    SearchProduct = '[Products] SearchProduct'
}

export class LoadProducts implements Action {
    readonly type = ProductsActionTypes.LoadProducts;
    constructor(public payload: Product[]) {}
}

export class AddProduct implements Action {
    readonly type = ProductsActionTypes.AddProduct;
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

export class SelectProduct implements Action {
    readonly type = ProductsActionTypes.SelectProduct;
    constructor(public payload: Product) {}
}

export type ProductsActions = LoadProducts | AddProduct | DeleteProduct | UpdateProduct | SearchProduct | SelectProduct;
