import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  constructor(private http: HttpClient) { }
  getUserList(): Observable<object>{
    const url = 'assets/userlist.json';
    return this.http.get<object>(url)
      .pipe(
        retry(3)
      );
  }
}
