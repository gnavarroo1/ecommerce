// import { environment } from './../../../../../environments/environment';

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-offer-list-item',
  templateUrl: './product-offer-list-item.component.html',
  styleUrls: ['./product-offer-list-item.component.scss']
})
export class ProductOfferListItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return undefined;
  }
}
