import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "./../../../environments/environment";
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    private productList = new BehaviorSubject < any[] > ([]);
    currentProductList = this.productList.asObservable();
    create(user) {
        return this.http.post<any>(environment.api+ 'createUser', user).map(res=>{
            if(res){
                return res;
            }
        });
    }

    getUserProductsOffer(){
        console.log("oa");
        return this.http
      .post(environment.api + "getUserProductsOffer", {
            userId: JSON.parse(localStorage.getItem('currentUser')).id
      }).map((res: any) => {
        var productsTmpLst = [];
        if (res) {
          productsTmpLst = res.data.products;
        }
        this.productList.next(productsTmpLst);
        return res;
      })
    }

}