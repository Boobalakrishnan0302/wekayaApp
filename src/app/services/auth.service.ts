import { Injectable } from '@angular/core';

import {Observable, BehaviorSubject, of} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


 user:Observable<any>;
  
  private authState=new BehaviorSubject(null);
 
  
  constructor( private router:Router, private http : HttpClient) { 
 
}
 

  signInn(credentials):Observable<any>{
    console.log(credentials)
    let email=credentials.email;
    let pw=credentials.password;
    let user = null;
   

    let header = new HttpHeaders();
    header.set("Accept", 'application/json');
    header.set('Content-Type', 'application/json');

    return this.http.post(environment.APP_URL, credentials, {headers : header});
  }

}
