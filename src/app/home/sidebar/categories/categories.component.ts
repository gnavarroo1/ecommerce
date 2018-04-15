
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
    category.isChecked= checked
    if (checked) {
      this.selectedFilters.push(category)
    } else {
      var index = this.selectedFilters.indexOf(category);
      this.selectedFilters.splice(index,1);
    }
  }
}
