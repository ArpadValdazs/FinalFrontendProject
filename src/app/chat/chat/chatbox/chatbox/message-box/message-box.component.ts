import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from '../../../../message-box.service';
import {MessageInterface} from '../../../../../../interfaces/message.interface';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  post: MessageInterface[];
  constructor(private messageBoxService: MessageBoxService) {}
  showPosts(): void{
    this.messageBoxService.getPost()
      .subscribe((data: MessageInterface) => {
        const{messages} = data;
        console.log(messages);
        this.post = messages.map((item) => {
           return {
             username: item.username,
             image: item.image,
             date: item.date,
             text: item.text,
           };
        });
      });
  }
  ngOnInit(): void {
    this.showPosts();
  }

}
