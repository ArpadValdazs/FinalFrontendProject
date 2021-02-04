import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MessageInterface} from '../../../../../../interfaces/message.interface';
@Injectable({
  providedIn: 'root'
})

export class MessageBoxService {

  constructor(private http: HttpClient) { }
  dbUrl = 'assets/chat';
  getPost(id: string): Observable<object>{
    const params = new HttpParams()
      .set('chat', id);
    const requestUrl = this.dbUrl + id + '.json';
    return this.http.get<object>(requestUrl, {params})
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  deletePost(id: number): Observable<{}>{
    const url = this.dbUrl;
    return this.http.delete<{}>(`${url}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  sendEditedPost(id: number, text: string): Observable<{}>{
    const url = this.dbUrl;
    return this.http.put<object>(`${url}/put`, text)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend retured code ${error.status},` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
