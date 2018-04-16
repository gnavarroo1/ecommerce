import {
  Injectable
} from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import {
  Observable
} from 'rxjs/Observable';
import {
  catchError
} from 'rxjs/operators';
import {
  environment
} from "./../../../environments/environment";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ProductService {
  private productList = new BehaviorSubject <any[]>([]);
  currentProductList = this.productList.asObservable();
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable < any > {
    return this.httpClient
      .get(environment.api + "getAllProducts")
      .map((res: any) => {
        if (res) {
          this.productList.next(res.data.products);
        }
        return res;
      })
  }

  getAllCategories(): Observable < any > {
    return this.httpClient
      .get(environment.api + "listCategories", {})
      .map(res => {
        if (res) {}
        return res;
      })
  }

  getProductsFilteredByCategory(categoryIdsList): Observable<any> {
    return this.httpClient
      .post(environment.api + "getProductsByCategory", {
        categoryIdsList: categoryIdsList
      }).map((res:any) => {
        if (res) {
          this.productList.next(res.data.products);
        }
        return res;
      })
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}
