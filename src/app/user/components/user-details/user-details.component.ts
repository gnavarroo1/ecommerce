import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  user:any;

  constructor(private userService: UserService) {
    this.userService.getUserDetails().subscribe(res => {
      this.user= res.data;
      console.log(this.user);
    });
    // this.userService.currentProductList.subscribe(productList => this.products = productList);
  }

  ngOnInit() { 
    
  }

}
