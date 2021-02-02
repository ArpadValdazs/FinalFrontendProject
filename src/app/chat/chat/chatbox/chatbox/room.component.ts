import {Component, Input, OnInit} from '@angular/core';
import {ChatRoomService} from '../../chat-room.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  constructor(private chatRoomsService: ChatRoomService) { }
  chatNum = 1;
  chatRoom: string;
  messageToServer = [];
  getRoomsNumberEvent(): void {
    this.chatRoom = this.chatRoomsService.getId();
    console.log(this.chatRoom);
  }

  addChatNumber(newMessage): void {
    this.messageToServer.push(this.chatNum);
    this.messageToServer.push(newMessage);
  }

  ngOnInit(): void {
    this.getRoomsNumberEvent();
  }

}
