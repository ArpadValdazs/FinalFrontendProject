import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  rooms = [
    {id: '1', name: 'chat1', image: 'image1.jpg', lastMessage: 'lastMessage'},
    {id: '2', name: 'chat2', image: 'image2.jpg', lastMessage: 'lastMessage2'},
    {id: '3', name: 'chat3', image: 'image2.jpg', lastMessage: 'lastMessage3'}
  ];
  ngOnInit(): void {
  }
}
