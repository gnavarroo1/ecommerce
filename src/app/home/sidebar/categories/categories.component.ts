import {
  Observable
} from 'rxjs/Observable';
import {
  Store
} from '@ngrx/store';
import {
  ProductService
} from '../../../core/services/product.service';

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories;
  // @Output() productsList = new EventEmitter < any > ();

  searchFilters$: Observable < any > ;
  selectedFilters = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.currentFilters.subscribe(searchFilters => this.selectedFilters = searchFilters);
    this.productService.currentCategories.subscribe(x => this.categories = x);
    this.categories.forEach(category => {
      if (this.selectedFilters.find(x => x === category.id)) {
        category.isChecked = true;
      }
    });
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
    category.isChecked = checked
    if (checked) {
      this.productService.addFilterSideBar(category.id);
      this.productService.getProductsFiltered(this.selectedFilters,"").subscribe(res => {
        
      });
    } else {
      this.productService.deleteFilterSideBar(category.id);
      if (this.selectedFilters.length !== 0) {
        this.productService.getProductsFiltered(this.selectedFilters,"").subscribe(res => {
          
        });
      } else {
        this.productService.getAllProducts().subscribe(res => {
          
        });
      }

    }
  }
}
