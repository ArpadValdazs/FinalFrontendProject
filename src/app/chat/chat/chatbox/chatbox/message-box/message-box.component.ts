import { Component, OnInit } from '@angular/core';
import {MessageBoxService} from '../../../../message-box.service';
import {MessageInterface} from '../../../../../../interfaces/message.interface';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  post: MessageInterface[] = [];
  constructor(private messageBoxService: MessageBoxService) {}
  showPosts(): void{
    this.messageBoxService.getPost()
      .subscribe((data: { messages: MessageInterface[] }) => {
        this.post = data.messages;
      });
  }
  deleteMessage(id: number): void {
    console.log(id, 'component');
    this.messageBoxService.deletePost(id).subscribe();
  }
  printPost(): void{
    console.log(this.post);
  }
  ngOnInit(): void {
    this.showPosts();
  }

}
