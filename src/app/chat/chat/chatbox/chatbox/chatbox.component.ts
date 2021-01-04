import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }
  chatNum = 1;
  messageToServer = [];
  /*
  chatNumber(chatNumber: number):number {
    return chatNumber;
  }
  */
  addChatNumber(newMessage): void {
    this.messageToServer.push(this.chatNum);
    this.messageToServer.push(newMessage);
    console.log(this.messageToServer);
  }

  ngOnInit(): void {
  }

}
