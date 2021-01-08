import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  rooms = [
    {id: '1', name: 'name1', image: 'image1.jpg', lastMessage: 'lastMessage'},
    {id: '2', name: 'name2', image: 'image2.jpg', lastMessage: 'lastMessage2'}
  ];
  ngOnInit(): void {
  }

}
