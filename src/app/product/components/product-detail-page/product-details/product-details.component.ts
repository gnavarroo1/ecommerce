import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
// import { CheckoutActions } from './../../../../checkout/actions/checkout.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../core/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: any;
  image: any;
  mainOptions: any;
  correspondingOptions: any;
  variantId: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.description = this.product.description;
    this.image = this.product.image;
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    this.correspondingOptions = this.mainOptions;
  }

  makeGlobalOptinTypesHash(customOptionTypes) {
    const temp = {};
    for (const key in customOptionTypes) {
      if (customOptionTypes.hasOwnProperty(key)) {
        temp[key] = Object.keys(customOptionTypes[key]);
      }
    }
    return temp;
  }

  createNewCorrespondingOptions(newOptions, optionKey) {
    for (const key in this.correspondingOptions) {
      if (this.correspondingOptions.hasOwnProperty(key) && key !== optionKey) {
        this.correspondingOptions[key] = newOptions[key];
      }
    }
  }

  addToCart(product: Product) {
    return;
  }
}
