import { Category } from './../../core/models/category';
import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
    static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
    static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
    static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
    static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
    static CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
    static GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
    static GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';

    getAllProducts() {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    }

    getProductDetail(id: string) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    }

    getAllProductsSuccess(products: Product[]) {
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
         };
    }

    getProductDetailSuccess(product: Product) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        };
    }

    clearSelectedProduct() {
        return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
    }

    getAllCategories() {
        return { type: ProductActions.GET_ALL_CATEGORIES };
    }

    getAllCategoriesSuccess(categories: Category[]) {
        return {
            type: ProductActions.GET_ALL_CATEGORIES_SUCCESS,
            payload: categories
        };
    }
}
