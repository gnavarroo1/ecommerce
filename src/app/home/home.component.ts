import {
  environment
} from './../../environments/environment';
import {
  ProductService
} from './../core/services/product.service';
import {
  Store
} from '@ngrx/store';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  Component,
  OnInit,
  OnChanges
} from '@angular/core';

import {
  Product
} from '../core/models/product';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-home',
  template: `
    <div class="col-xs-12">
      <div class="col-xs-3">
        <app-categories [categories]="categories$"></app-categories>
      </div>
      <div class="col-xs-9">
        <app-content
          [products]="products$"
          [categoryIds]="selectedCategoriesIds$ ">
        </app-content>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
// <app-breadcrumb [categories]="categories$.value"></app-breadcrumb>
export class HomeComponent implements OnInit {
  products$: Observable < any > ;
  categories$: Observable < any > ;
  selectedCategoriesIds$: Observable < number[] > ;
  // categoriesLst = {
  //   'categories': [{
  //       'id': 1,
  //       'nombre': 'Cereales'
  //     },
  //     {
  //       'id': 2,
  //       'nombre': 'Tuberculos'
  //     },
  //     {
  //       'id': 3,
  //       'nombre': 'Legumbres'
  //     },
  //     {
  //       'id': 4,
  //       'nombre': 'Hortalizas'
  //     },
  //     {
  //       'id': 5,
  //       'nombre': 'Frutas'
  //     },
  //     {
  //       'id': 6,
  //       'nombre': 'Oleoginoza'
  //     }
  //   ]
  // };
  constructor(private productService: ProductService) {
    // Get all products for the product list component

    this.productService.getAllProducts().subscribe(res => {
      console.log(res);
      this.products$ = Observable.of(res.data.products);
      console.log('product' + this.products$);
    });

    this.productService.getAllCategories().subscribe(res => {
      console.log(res);
      this.categories$ = Observable.of(res.data);
      console.log('categoria' + this.categories$);
    });
    // this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
  }

  ngOnInit() {}

}
