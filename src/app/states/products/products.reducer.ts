import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Product } from '../../models/Product';
import { ProductsActionTypes, ProductsActions } from './products.action';
import { ProductsState } from './products.state';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

const PAGESIZE = 15;
const initialState: ProductsState = adapter.getInitialState({
    //  isLoading: false,
    //  loaded: false,
    selectedId: -1,
    actualPage: 0,
    totalObjects: 0,
    pageSize: PAGESIZE
});

function failWithMsg(message: string): never {
    throw new Error(message);
}

export function reducer(state: ProductsState = initialState, action: ProductsActions): ProductsState {
    switch (action.type) {
        case ProductsActionTypes.LoadProducts: {
            const products: Product[] = action.payload;
            const productsNum = (products && products.length > 0) ? products.length : 0;
            const newState = adapter.addMany(products, state);
            return Object.assign(newState, {
                // selectedId: (state.totalObjects === 0 && productsNum)? 0: state.selectedId, // force to highlight the first item when load first time
                totalObjects: state.totalObjects + productsNum,
                actualPage: Math.ceil((state.totalObjects + productsNum) / PAGESIZE)
            });
        }

        case ProductsActionTypes.AddProduct: {
            if (action.payload.id === -1) {
                action.payload.id = Math.max(...state.ids as number[]) + 1;
            }
            const newState = adapter.addOne(action.payload, state);
            return Object.assign(newState, {
                totalObjects: state.totalObjects + 1,
                actualPage: Math.ceil((state.totalObjects + 1) / PAGESIZE)
            });
        }

        case ProductsActionTypes.UpdateProduct: {
            const newState = adapter.upsertOne(action.payload, state);
            return newState;
        }

        case ProductsActionTypes.DeleteProduct: {
            const newState = adapter.removeOne(action.productId, state);
            return Object.assign(newState, {
                totalObjects: state.totalObjects - 1,
                actualPage: Math.ceil((state.totalObjects - 1) / PAGESIZE)
            });
        }

        case ProductsActionTypes.SelectProduct: {
            const selectProductId = action.payload.id;
            return {
                ...state,
                selectedId: selectProductId,
            };
        }

        case ProductsActionTypes.SearchProduct: {
            return {
                ...state,
                search: action.searchTerm,
            };
        }

        default: {
            return state;
        }
    }
}

export const {
    selectAll: selectAllProducts
} = adapter.getSelectors();

