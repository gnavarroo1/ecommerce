import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-products-offer',
  templateUrl: './products-offer.component.html',
  styleUrls: ['./products-offer.component.scss']
})

export class ProductsOfferComponent implements OnInit {
  @Input() products: any[];
  // @Input('categoryIds') selectedCategoryIds: number [];
  @Input() toggleLayout;
  
  constructor(private userService: UserService) {
    this.userService.getUserProductsOffer().subscribe(res => {
      
    });
    this.userService.currentProductList.subscribe(productList => this.products = productList);
  }

  ngOnInit() { 
    
  }

  getProductImageUrl(url) {
    return url;
  }
 
  getMargin() {
    return '0 15px 20px 0';
  }

  trackByFn(index, item) {
    return index;
  }

}
