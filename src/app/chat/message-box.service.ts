import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MessageInterface} from '../../interfaces/message.interface';
@Injectable({
  providedIn: 'root'
})

export class MessageBoxService {

  constructor(private http: HttpClient) { }
  dbUrl = 'assets/message.json';
  getPost(): Observable<object>{
    return this.http.get<object>(this.dbUrl)
      .pipe(
        retry(3)
      );
  }
  deletePost(id: string): Observable<{}>{
    console.log(id, 'service');
    const url = this.dbUrl;
    return this.http.delete<{}>(`${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }*

  handleError(error: HttpErrorResponse): any {
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
