import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  constructor(private http: HttpClient) { }
  chatRoomsUrl = 'assets/chatRooms.json';
  getChatRooms(): Observable<object>{
    return this.http.get<object>(this.chatRoomsUrl)
      .pipe(
        retry(3)
      );
  }
}
