import {
  Observable
} from 'rxjs/Observable';
import {
  HttpService
} from './http';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: HttpService) {}

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable < any > {
    return undefined; //this.http.get(`/spree/api/v1/products/${id}`).map(res => res.json());
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */

  getCategories(): any {
    /*  return this.http.get(`/spree/api/v1/taxonomies?set=nested`)
        .map(res => res.json());*/
    const categories = {
          'taxons': [{
              'id': 3,
              'name': 'Category1'
            },
            {
              'id': 4,
              'name': 'Category2',
            },
            {
              'id': 5,
              'name': 'Category3',
            },
            {
              'id': 6,
              'name': 'Category4',
            },
            {
              'id': 7,
              'name': 'Category5',
            }
          ]
        };

    return Observable.of(categories);
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getProducts(): any {
    // return this.http.get(`/spree/api/v1/products`).map(res => res.json());
    return [];
  }




}
