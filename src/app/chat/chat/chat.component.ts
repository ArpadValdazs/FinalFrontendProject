import { switchMap } from 'rxjs/operators';
import {Component, OnInit, Output} from '@angular/core';
import {ChatRoomService} from './chat-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
// @ts-ignore
import {ChatRoomsInterface} from '../../../interfaces/chatRooms.interface';
import {MessageBoxComponent} from './chatbox/chatbox/message-box/message-box.component';
import {EventEmitter} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {slideInAnimation} from './animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    slideInAnimation
  ]
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
  getRoomNumber(id: number): void {
    const idString = id.toString();
    this.chatRoomsService.getRooms(idString);
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
