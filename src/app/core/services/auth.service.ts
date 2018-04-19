import {
  Injectable
} from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import {
  Observable
} from 'rxjs/Observable';
import {
  environment
} from "./../../../environments/environment";
import {
  BehaviorSubject
} from "rxjs/BehaviorSubject";
@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}
  private isAuthenticated = new BehaviorSubject < boolean > (false);
  currentStatus = this.isAuthenticated.asObservable();
  
  loginUser(email: string, password: string) :Observable<any> {
    return this.httpClient.post < any > (environment.api + "loginUser", {
      email: email,
      password: password
    }).map(res => {
      if (res) {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        if (res.status === 200)
          this.isAuthenticated.next(true);
      }
      return res;
    })
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.isAuthenticated.next(false);
  }

}
