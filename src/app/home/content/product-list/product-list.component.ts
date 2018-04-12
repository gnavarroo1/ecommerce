import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  // tslint:disable-next-line:no-input-rename
  @Input('categoryIds') selectedCategoryIds;
  @Input() toggleLayout;

  constructor() { }

  ngOnInit() { }

  getProductImageUrl(url) {
    return url;
  }
 
  getMargin() {
    return this.toggleLayout.size === 'COZY' ? '0 15px 20px 0' : '0 80px 20px 0';
  }

  trackByFn(index, item) {
    return index;
  }

}
