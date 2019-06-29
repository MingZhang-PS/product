import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../states/products.state';
import * as fromReducer from '../reducers/products.reducer';

export const rootState = createFeatureSelector<ProductsState>('products');

const selectAllProducts = createSelector(
    rootState,
    fromReducer.selectAllProducts
);

const selectProductById = createSelector(
    rootState,
    (state, props) => state.entities[props.id]
);

const selectActiveProductId = createSelector(
    rootState,
    (state) => state.selectedId
);

const selectProductEntities = createSelector(
    rootState,
    (state) => state.entities
);

const selectActiveProduct = createSelector(
    selectProductEntities,
    selectActiveProductId,
    (state, id) => {
       return id >= 0 ? state[id] : null;
    }
);

export { selectAllProducts, selectProductById, selectActiveProductId, selectActiveProduct };
