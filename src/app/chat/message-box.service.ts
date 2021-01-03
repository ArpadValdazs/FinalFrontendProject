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
  getPost(): Observable<object>{
    return this.http.get<MessageInterface>('assets/message.json')
      .pipe(
        retry(3)
      );
  }
}
