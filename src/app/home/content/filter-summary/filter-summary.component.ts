import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-summary',
  templateUrl: './filter-summary.component.html',
  styleUrls: ['./filter-summary.component.scss']
})
export class FilterSummaryComponent implements OnInit {
  filters$: Observable<any>;

  constructor() {
    // this.filters$ = this.store.select(getFilters);
  }

  ngOnInit() {
  }

  removeFilter(removedFilter) {
    // this.store.dispatch(this.search.removeFilter(removedFilter));
  }

}
