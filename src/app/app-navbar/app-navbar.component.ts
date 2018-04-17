import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import {
  AuthService
} from '../core/services/auth.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {
  isAuthenticated: Observable < boolean > ;
  private selectedFilters :any [];
  // @Output() productsList = new EventEmitter <any> ();

  categories$: Observable < any >
  categoryList = [];
  filter ="";
  constructor(private authService: AuthService, private router: Router, private productService: ProductService) {
    
  }

  ngOnInit() {
    this.authService.currentStatus.subscribe(res => this.isAuthenticated = Observable.of(res));
    this.productService.currentFilters.subscribe(searchFilters => this.selectedFilters = searchFilters );
    this.productService.currentCategories.subscribe(categoryList => this.categoryList = categoryList);
  }

  filterList(){
    this.productService.getProductsFiltered(this.selectedFilters,this.filter).subscribe(res => {
      
    });
  }

  selectCategory(category) {
    
    this.productService.addFilterHeader(category.id);
    
    this.productService.getProductsFiltered(this.selectedFilters,"").subscribe(res => {
      
    });
  }

  
  getRoutes(){
    return this.router.url === "/auth/login" || this.router.url === "/auth/signup";
  }
  
}
