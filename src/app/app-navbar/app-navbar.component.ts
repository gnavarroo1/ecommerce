import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
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
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isAuthenticated = Observable.of(false);
    console.log(this.isAuthenticated);
  }

  selectCategory(category) {
    this.router.navigateByUrl('/');
  }
}
