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

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable < any > {
    return this.httpClient
      .get(environment.api + "getAllProducts")
      .map(res => {
        if (res) {}
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
      }).map(res => {
        if (res) {}
        return res;
      })
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}
