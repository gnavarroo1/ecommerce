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
  imagen: any;
  constructor(private userService: UserService) {
    this.userService.getUserDetails().subscribe(res => {
      this.user= res.data;
    });
    // this.userService.currentProductList.subscribe(productList => this.products = productList);
  }

  getUserImageUrl(){
    this.imagen = "/" + this.user.imagen;
    console.log(this.imagen);
    return this.imagen;
  }

  ngOnInit() { 
    this.userService.getUserDetails().subscribe(res => {
      this.user= res.data;
    });
  }

}
