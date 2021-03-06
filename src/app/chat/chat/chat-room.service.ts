import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {catchError, retry} from 'rxjs/operators';
import {ChatRoomsInterface} from '../../../interfaces/chatRooms.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  private id: string;

  constructor(private http: HttpClient) { }
  chatRoomsUrl = 'assets/chatRooms.json';
  requestUrl = 'lulgens.hui';
  getChatRooms(): Observable<object>{
    return this.http.get<object>(this.chatRoomsUrl)
      .pipe(
        retry(3)
      );
  }
  // Function establishes room.id in order to open the needed room.
  // It is used by means of service, which takes room.id with getId() function.
  getRoomId(id: string): void {
    this.id = id;
  }
  // Used by service.
  getId(): string {
    return this.id;
  }
  /*
  chatRoomsRequest(id: number): Observable<object>{
    const chatRoomUrl = `${this.requestUrl}/${id}`;
    return this.http.get<object>(chatRoomUrl)
      .pipe(
        retry(3)
      );
  }*/
}
