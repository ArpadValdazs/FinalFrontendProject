import { Component, OnInit } from '@angular/core';
import {ChatRoomService} from './chat-room.service';
import {ChatRoomsInterface} from '../../../interfaces/chatRooms.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatRooms: ChatRoomsInterface[] = [];
  constructor(private chatRoomsService: ChatRoomService) { }
  getPosts(): void{
    this.chatRoomsService.getChatRooms()
      .subscribe((data: {chatRooms: ChatRoomsInterface[]}) => {
        this.chatRooms = data.chatRooms;
        console.log(this.chatRooms);
        }
      );
  }
  sortedRooms(sorted: object): object {
    console.log(sorted);
    console.log(this.chatRooms);
    // @ts-ignore
    return this.chatRooms = sorted;
  }

  ngOnInit(): void {

    this.getPosts();
  }
}
