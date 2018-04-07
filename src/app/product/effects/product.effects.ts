import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ProductService } from './../../core/services/product.service';
// import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService,
              private productActions: ProductActions) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
    GetAllProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_PRODUCTS)
    .switchMap((action: any) => this.productService.getProducts())
    .map((data: any) => this.productActions.getAllProductsSuccess({products: data}));

  @Effect()
    GetAllCategories$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_CATEGORIES)
    .switchMap((action: any) => this.productService.getCategories())
    .map((data: any) => this.productActions.getAllCategoriesSuccess({categories: data}));

  @Effect()
  GetProductDetail$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT_DETAIL)
    .switchMap((action: any) => this.productService.getProduct(action.payload))
    .map((data: any) => this.productActions.getProductDetailSuccess(data));
}
