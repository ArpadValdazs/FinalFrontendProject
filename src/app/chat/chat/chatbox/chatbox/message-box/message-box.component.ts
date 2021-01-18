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
  sss: string;
  edit = false;
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
  editMessage(id: number): void{
    console.log(id);
    /*здесь он цепляется за менюшку, вообще говоря, здесь надо сделать норм роутинг, чтобы всё работало нормально
    * */
    const idString = id.toString();
    const place2 = document.getElementById(idString);
    console.log(place2);
    const place = document.getElementById(idString).querySelector('p.text');
    const input = document.createElement('input');
    const button = document.createElement('button');
    input.setAttribute('value', place.textContent);
    //input.setAttribute('type', 'text');
    console.log(input);
    console.log(place);
    place.insertAdjacentElement('afterend', input);
    place.insertAdjacentElement('afterend', button);
      // const place = document.body.querySelector('.message');.children[3];
    //this.edit = true;
  }
  ngOnInit(): void {
    this.showPosts();
  }
  sendEditedMessage(): void {
    console.log('xyu');
  }
}
