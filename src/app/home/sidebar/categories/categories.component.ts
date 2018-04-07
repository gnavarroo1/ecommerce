import { SearchActions } from './../../reducers/search.actions';
import { getFilters } from './../../reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories;
  searchFilters$: Observable<any>;
  selectedFilters = [];

  constructor(private store: Store<AppState>, 
    private actions: SearchActions,
    private ref: ChangeDetectorRef) {
      this.searchFilters$ = this.store.select(getFilters);
      this.searchFilters$.subscribe(data => {
        this.selectedFilters = data;
      });
     }

  ngOnInit() {
  }

  isChecked(category) {
    let result = false;
    this.selectedFilters.forEach((filter) => {
      if (filter.id === category.id) {
        result = true;
      }
    });
    return result;
  }

  categorySelected(category, checked) {
    if (checked) {
      this.store.dispatch(this.actions.addFilter(category));
    } else {
      this.store.dispatch(this.actions.removeFilter(category));
    }
  }



}
