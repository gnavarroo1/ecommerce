
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

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

  constructor() {
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
        console.log('is checked');
    } else {
        console.log('is unchecked');
    }
  }
}
