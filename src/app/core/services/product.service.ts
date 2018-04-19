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
import {
  BehaviorSubject
} from "rxjs/BehaviorSubject";

@Injectable()
export class ProductService {
  private productList = new BehaviorSubject < any[] > ([]);
  currentProductList = this.productList.asObservable();

  private filterList = [];
  private searchFilters = new BehaviorSubject < any[] > (this.filterList);
  currentFilters = this.searchFilters.asObservable();

  private tmp = [];
  private categories = new BehaviorSubject < any[] > ([]);
  currentCategories = this.categories.asObservable();

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
      .get(environment.api + "listCategories")
      .map((res: any) => {
        if (res) {
          res.data.forEach(category => {
            category.isChecked = false;
          });
          this.tmp = res.data;
          this.categories.next(res.data);
        }
        return res;
      })
  }

  getProductsFiltered(categoryIdsList?:any[], searchString?:string): Observable < any > {
    return this.httpClient
      .post(environment.api + "getProductsByCategory", {
        categoryIdsList: categoryIdsList,
        searchString: searchString,
      }).map((res: any) => {
        var productsTmpLst = [];
        if (res) {
          productsTmpLst = res.data.products;
        }
        this.productList.next(productsTmpLst);
        return res;
      })
  }

  // getProductsFiltered(searchString: string) {
  //   var filter = [];
  //   this.currentFilters.subscribe(x => filter = x);
  //   return this.httpClient.post(environment.api + "getProductsByCategory", {
  //     searchString: searchString,
  //     categoryIdsList: filter
  //   }).map((res: any) => {
  //     var productsTmpLst = [];
  //     if (res) {
  //       productsTmpLst = res.data.products;
  //     }
  //     this.productList.next(productsTmpLst);
  //     return res;
  //   });
  // }


  addFilterHeader(categoryID) {
    this.filterList = [];
    this.filterList.push(categoryID);
    this.searchFilters.next(this.filterList);
    this.checkCategoryFromHeader(this.tmp, categoryID);
    this.categories.next(this.tmp);
  }

  addFilterSideBar(categoryID) {
    if (this.filterList.indexOf(categoryID) === -1) {
      this.filterList.push(categoryID);
      this.searchFilters.next(this.filterList);
    }
  }

  deleteFilterSideBar(categoryID) {
    var index = this.filterList.indexOf(categoryID);
    this.filterList.splice(index, 1);
    this.searchFilters.next(this.filterList);
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

  checkCategoryFromHeader(array, id) {
    array.forEach(element => {
      element.isChecked = false;
    });
    array[array.findIndex(x => x.id === id)].isChecked = true;
  }

  addProduct(data){
    return this.httpClient.post<any>(environment.api+'addProduct',data).map(res=>{
      if(res.status=== 200){
        console.log("Producto agregado")
      }
      return res;        
      
    })
  }
}
