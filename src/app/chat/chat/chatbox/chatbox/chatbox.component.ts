import { Component, OnInit } from '@angular/core';
import {ChatRoomService} from '../../chat-room.service';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor(private chatRoomsService: ChatRoomService) { }
  chatNum = 1;
  messageToServer = [];
  /*
  chatNumber(chatNumber: number):number {
    return chatNumber;
  }
  */
  goToRoom(id: number): void{
    // Этот метод работает с целью вывода message-box-component
    // Здесь надо написать алгоритм присваивания ID, чтобы затем он по нему был запрос
    this.chatRoomsService.chatRoomsRequest(id)
      .subscribe();
  }
  addChatNumber(newMessage): void {
    this.messageToServer.push(this.chatNum);
    this.messageToServer.push(newMessage);
  }

  ngOnInit(): void {
  }

}
