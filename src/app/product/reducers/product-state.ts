import { Category } from './../../core/models/category';
import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: List<number>;
  productEntities: Map<number, Product>;
  selectedProductId: number;
  selectedProduct: Product;
  categories: List<Category>;
}

export const ProductStateRecord = Record({
  productIds: List([]),
  productEntities: Map({}),
  selectedProductId: null,
  selectedProduct: Map({}),
  categories: List([])
});
