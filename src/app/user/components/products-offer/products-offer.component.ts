import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-products-offer',
  templateUrl: './products-offer.component.html',
  styleUrls: ['./products-offer.component.scss']
})

export class ProductsOfferComponent implements OnInit {
  @Input() products: any[];
    
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

}
