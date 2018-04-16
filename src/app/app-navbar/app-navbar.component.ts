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
  private selectedFilters = [];
  // @Output() productsList = new EventEmitter <any> ();

  categories$: Observable < any >
  categoryList = [];
    // categoryList = [{
    //     'id': 1,
    //     'nombre': 'Cereales'
    //   },
    //   {
    //     'id': 2,
    //     'nombre': 'Tuberculos'
    //   },
    //   {
    //     'id': 3,
    //     'nombre': 'Legumbres'
    //   },
    //   {
    //     'id': 4,
    //     'nombre': 'Hortalizas'
    //   },
    //   {
    //     'id': 5,
    //     'nombre': 'Frutas'
    //   },
    //   {
    //     'id': 6,
    //     'nombre': 'Oleoginoza'
    //   }
    // ];
  constructor(private authService: AuthService, private router: Router, private productService: ProductService) {
    
  }

  ngOnInit() {
    this.authService.currentStatus.subscribe(res => this.isAuthenticated = Observable.of(res));
    this.productService.currentFilters.subscribe(searchFilters => this.selectedFilters = searchFilters );
    this.productService.currentCategories.subscribe(categoryList => this.categoryList = categoryList);
  }

  selectCategory(category) {
    this.router.navigateByUrl('/');
    this.productService.addFilterHeader(category.id);
    this.productService.getProductsFilteredByCategory(this.selectedFilters);
  }
}
