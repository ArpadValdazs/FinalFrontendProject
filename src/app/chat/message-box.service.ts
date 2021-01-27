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
  dbUrl = 'assets/chat1.json';
  getPost(/*id*/): Observable<object>{
    /*const postRequestUrl = `${this.dbUrl}/${id}`;*/
    return this.http.get<object>('assets/chat1.json')
      .pipe(
        retry(3)
      );
  }
  deletePost(id: number): Observable<{}>{
    console.log(id, 'service');
    const url = this.dbUrl;
    return this.http.delete<{}>(`${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

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
