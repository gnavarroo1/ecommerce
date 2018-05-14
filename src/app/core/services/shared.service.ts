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
  export class SharedService {
  
    constructor(private httpClient: HttpClient) {}
    uploadImage(fileToUpload:File):Observable<any> {
        const formData: FormData = new FormData();
        formData.append('image',fileToUpload,fileToUpload.name);
        return this.httpClient.post<any>(environment.api+ 'fileUpload',formData).map(res=>{
            if(res){
                console.log(res);
                var pathToImage = res.imgSrc;
                return res;
            }
        });
    }


  }
  