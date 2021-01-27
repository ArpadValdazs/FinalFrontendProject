import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {ChatRoomService} from './chat-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ChatRoomsInterface} from '../../../interfaces/chatRooms.interface';
import {MessageBoxComponent} from './chatbox/chatbox/message-box/message-box.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatRooms: ChatRoomsInterface[] = [];
  itemToOpen: number;
  constructor(
    private chatRoomsService: ChatRoomService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  getRooms(): void{
    this.chatRoomsService.getChatRooms()
      .subscribe((data: {chatRooms: ChatRoomsInterface[]}) => {
        this.chatRooms = data.chatRooms;
        console.log(data.chatRooms);
        }
      );
  }
  getMessages(id: number): void{
    this.itemToOpen = id;
  }
  sortedRooms(sorted: object): object {
    // console.log(sorted);
    // @ts-ignore
    return this.chatRooms = sorted;
  }

  ngOnInit(): void {
    this.getRooms();
  }
}
