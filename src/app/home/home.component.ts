// import { getSelectedTaxonIds } from './reducers/selectors';
// import { Taxonomy } from './../core/models/taxonomy';
import {
  environment
} from './../../environments/environment';
// import { ProductActions } from './../product/actions/product-actions';
// import { AppState } from './../interfaces';
// import { getProducts, getTaxonomies } from './../product/reducers/selectors';
import {
  Store
} from '@ngrx/store';
import {
  Observable
} from 'rxjs/Observable';

import {
  Component,
  OnInit,
  OnChanges
} from '@angular/core';
import { Product } from '../core/models/product';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-home',
  template: `
  <app-breadcrumb [categories]="categories$.value.categories"></app-breadcrumb>
    <div class="col-xs-12">
      <div class="col-xs-3">
        <app-categories [categories]="categories$.value.categories"></app-categories>
      </div>
      <div class="col-xs-9">
        <app-content
          [products]="products$.value "
          [categoryIds]="selectedCategoriesIds$ ">
        </app-content>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
/*
<app-content
          [products]="products$ | async"
          [categoriesIds]="selectedCategoriesIds$ | async">
        </app-content>*/
export class HomeComponent implements OnInit {
  products$: Observable < any > ;
  categories$: Observable < any > ;
  selectedCategoriesIds$: Observable < number[] > ;
  categoriesLst = {
    'categories': [{
        'id': 1,
        'nombre': 'Cereales'
      },
      {
        'id': 2,
        'nombre': 'Tuberculos'
      },
      {
        'id': 3,
        'nombre': 'Legumbres'
      },
      {
        'id': 4,
        'nombre': 'Hortalizas'
      },
      {
        'id': 5,
        'nombre': 'Frutas'
      },
      {
        'id': 6,
        'nombre': 'Oleoginoza'
      }
    ]
  };
  constructor() {
    // Get all products for the product list component
    // this.store.dispatch(this.actions.getAllProducts());
    // this.store.dispatch(this.actions.getAllTaxonomies());
    // this.products$ = this.store.select(getProducts);
    this.products$ = Observable.of([]);
    this.categories$ = Observable.of(this.categoriesLst);
    console.log(this.categories$);
    // this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
  }

  ngOnInit() {}

}
