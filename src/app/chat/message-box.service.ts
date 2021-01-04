import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MessageInterface} from '../../interfaces/message.interface';
@Injectable({
  providedIn: 'root'
})

export class MessageBoxService {

  constructor(private http: HttpClient) { }
  deleteUrl = 'zaglushka.php';
  getPost(): Observable<object>{
    return this.http.get<MessageInterface>('assets/message.json')
      .pipe(
        retry(3)
      );
  }
  /*
  deletePost(post: string): Observable<object>{

    return this.http.post<string>(this.deleteUrl, post)
      .pipe(
        catchError(this.handleError('deletePost', post))
      );
  }*/
}
