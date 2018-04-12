import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user) {
        return this.http.post<any>(environment.api + 'createUser', user).map(res => {
            if (res) {
                return res;
            }
        });
    }

}
