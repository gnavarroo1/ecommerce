import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../core/services/product.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
    actionsSubscription: Subscription;
    @Input() product;
    routeSubs: Subscription;
    productId: any;

    constructor(private productService:ProductService, private route: ActivatedRoute){
        this.actionsSubscription = this.route.params.subscribe(
            (params: any) => {
              this.productId = params['id'];
              this.productService
                .getProduct(this.productId)
                .subscribe(response =>{
                    this.productService.currentProduct.subscribe(prod => this.product = prod);
                });
                
           }
          );
    }
    ngOnInit(){}
    
  getProductImageUrl(url) {
    return this.product.imagen;
  }
 
}