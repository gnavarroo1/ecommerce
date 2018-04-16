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
  @Input() categories;
  @Output() productsList = new EventEmitter < any > ();

  searchFilters$: Observable < any > ;
  selectedFilters = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {}

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
      this.selectedFilters.push(category.id);
      this.productService.getProductsFilteredByCategory(this.selectedFilters).subscribe(res => {
        console.log(res.data.products);
        this.productsList.emit(res.data.products);
      });

    } else {
      var index = this.selectedFilters.indexOf(category.id);
      this.selectedFilters.splice(index, 1);
      if (this.selectedFilters.length !== 0) {
        this.productService.getProductsFilteredByCategory(this.selectedFilters).subscribe(res => {
          console.log(res.data.products);
          this.productsList.emit(res.data.products);
        });
      } else {
        this.productService.getAllProducts().subscribe(res => {
          console.log(res.data.products);
          this.productsList.emit(res.data.products);
        });
      }

    }
  }
}
