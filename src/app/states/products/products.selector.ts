import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import * as fromCase from './products.reducer';

export const rootState = createFeatureSelector<ProductsState>('products');

const selectAllProducts = createSelector(
    rootState,
    fromCase.selectAllProducts
);

const selectProductById = createSelector(
    rootState,
    (state, props) => state.entities[props.id]
);

const selectActiveProductId = createSelector(
    rootState,
    (state) => state.selectedId
);

export { selectAllProducts, selectProductById, selectActiveProductId };
