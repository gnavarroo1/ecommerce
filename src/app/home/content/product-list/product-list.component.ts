import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  // tslint:disable-next-line:no-input-rename
  @Input('categoriesIds') selectedCategoriesIds;
  @Input() toggleLayout;
  constructor() { }

  ngOnInit() {
  }
  // TODO
  addToCart(product) {
    const variant_id = product.id;
  }

}
