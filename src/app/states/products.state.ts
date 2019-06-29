import { EntityState } from '@ngrx/entity';
import { Product } from '../models/Product';

export interface ProductsState extends EntityState<Product> {
   // isLoading: boolean;
   // loaded: boolean;
	selectedId?: number;
    actualPage?: number;
    totalObjects?: number;
    pageSize?: number;
    search?: string;
}
