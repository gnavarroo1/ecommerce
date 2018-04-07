import { Router } from '@angular/router';
import { SearchActions } from './../../home/reducers/search.actions';
import { getCategories } from './../../product/reducers/selector';
// import { getTotalCartItems } from './../../checkout/reducers/selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { getAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../../auth/actions/auth.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable < boolean > ;
  //totalCartItems: Observable < number > ;
  categories$: Observable < any > ;
  categoryList = [{
      "id": 4,
      "name": "Category1",
      
    },
    {
      "id": 3,
      "name": "Category2",
    }, {
      "id": 8,
      "name": "Category3",
    }, {
      "id": 9,
      "name": "Category4",
    }, {
      "id": 10,
      "name": "Category5",
    }
  ];
  constructor(
    private store: Store < AppState > ,
    private authService: AuthService,
    private authActions: AuthActions,
    private searchActions: SearchActions,
    private router: Router
  ) {
    this.categories$ = this.store.select(getCategories);
  }

  ngOnInit() {
    this.store.dispatch(this.authActions.authorize());
    this.isAuthenticated = this.store.select(getAuthStatus);
    // this.totalCartItems = this.store.select(getTotalCartItems);
  }

  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }

}

