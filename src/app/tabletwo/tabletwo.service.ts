import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabletwoService {
  // I don't know any another way how to parse json file in Angular
  constructor(private http: HttpClient) { }

  getTable(): Observable<object>{
    return this.http.get('assets/data.json');
  }
}
