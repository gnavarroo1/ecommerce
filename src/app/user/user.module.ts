import {
  RouterModule
} from '@angular/router';
import {
  UserRoutes
} from './user.routes';
import {
  NgModule
} from '@angular/core';

//components

import {
  AddProductComponent
} from './components/add-product/add-product.component';
import { ProductsOfferComponent } from './components/products-offer/products-offer.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductOfferListItemComponent} from './components/products-offer/product-offer-list-item/product-offer-list-item.component';
import {
  UserComponent
} from './user.component';

//services
import {
  UserService
} from '../core/services/user.service';
import {
  UserRoutes as routes
} from './user.routes';

import {
  SharedModule
} from '../shared/index';

@NgModule({
  declarations: [
    // components
    AddProductComponent,
    ProductsOfferComponent,
    UserDetailsComponent,
    UserComponent,
    ProductOfferListItemComponent

  ],
  exports: [
    // components
    AddProductComponent,
    ProductsOfferComponent,
    UserDetailsComponent
  ],
  providers: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule {}
