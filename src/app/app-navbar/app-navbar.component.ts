import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  categories$: Observable<any>
  categoryList = [{
    'id': 1,
    'nombre': 'Cereales'
  },
  {
    'id': 2,
    'nombre': 'Tuberculos'
  },
  {
    'id': 3,
    'nombre': 'Legumbres'
  },
  {
    'id': 4,
    'nombre': 'Hortalizas'
  },
  {
    'id': 5,
    'nombre': 'Frutas'
  },
  {
    'id': 6,
    'nombre': 'Oleoginoza'
  }];
  constructor(private authService: AuthService,private router: Router) {
    
  }

  ngOnInit() {
    this.authService.currentStatus.subscribe(res => this.isAuthenticated =  Observable.of(res));
  }

  selectCategory(category) {
    this.router.navigateByUrl('/');
  }
}
