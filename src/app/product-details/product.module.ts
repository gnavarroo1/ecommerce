import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';
import { RouterModule } from '@angular/router';

import { ProductService } from './../core/services/product.service';
import { ProductDetailsComponent } from './product-details.component';

import { ProductRoutes as routes } from './product.routes';


@NgModule({
    declarations: [
      // components
      ProductDetailsComponent,
    ],
    exports: [
      // components
      ProductDetailsComponent,
    ],
    imports: [
      SharedModule,
      RouterModule.forChild(routes),
    ],
    providers: [
    ]
  })
  export class ProductModule {}
  