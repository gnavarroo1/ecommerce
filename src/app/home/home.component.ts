import { Component, OnInit, OnChanges } from '@angular/core';
import {getSelectedCategoryIds} from './reducers/selectors';
import {AppState} from './../interfaces';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Product} from '../core/models/product';
import {Category} from '../core/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<any>;
  categories$: Observable<any>;
  selectedCategoryIds$: Observable<number[]>;
  constructor(private store: Store<AppState>) {
    // this.store.dispatch(this.actions.getAllProducts());
    // this.store.dispatch(this.actions.getAllCategories());
    // this.products$ = this.store.select(getProducts);
    // this.categories$ = this.store.select(getCategories);
    // this.selectedCategoryIds$ = this.store.select(getSelectedCategoryIds);
  }
  ngOnInit() {
  }

}
