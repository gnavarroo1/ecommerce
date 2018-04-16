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
        <app-categories></app-categories>
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
//<app-breadcrumb [categories]="categories$.value"></app-breadcrumb>
export class HomeComponent implements OnInit {
  products$: [{}] ;
  categories$: [{}] ;
  selectedCategoriesIds$: Observable < number[] > ;
  
  constructor(private productService: ProductService) {
    // Get all products for the product list component
    
    this.productService.getAllProducts().subscribe(res => {
      this.products$ = res.data.products;
    });

    this.productService.getAllCategories().subscribe(res => {
      this.categories$ = res.data;
    });
    // this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
  }

  ngOnInit() {}

}
