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
  deleteUser(id: number): Observable<{}> {
    const url = 'deleteLink';
    return this.http.delete<object>(`${url}/${id}`)
      .pipe(
        retry(3)
      );
  }
  changeStatus(id: number, status: string): Observable<{}>{
    const url = 'changeUser';
    return this.http.put<object>(`${url}/edit/${id}`, status)
      .pipe(
        retry(3)
      );
  }
}
