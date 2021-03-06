import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  private isAdmin = true;
  redirectUrl: string;

  constructor(private http: HttpClient) { }
  sendAuth(submit: object): Observable<{}>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    const Url = 'http://finalserverproject/src/Controller/authController.php';
    return this.http.post(Url, submit, httpOptions)
      .pipe(
        retry(3)
      );
  }
  getAdminStatus(): boolean{
    return this.isAdmin;
  }
}
