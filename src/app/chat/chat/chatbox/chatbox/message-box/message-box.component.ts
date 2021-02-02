import {Component, Input, OnInit, Output} from '@angular/core';
import {MessageBoxService} from './message-box.service';
import {MessageInterface} from '../../../../../../interfaces/message.interface';
import {ChatRoomService} from '../../../chat-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ChatRoomsInterface} from '../../../../../../interfaces/chatRooms.interface';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  @Input() id: string;
  post: MessageInterface[] = [];

  sss: string;
  edit = false;
  constructor(
    private messageBoxService: MessageBoxService,
    private chatRoomService: ChatRoomService,
  ) {}
  showPosts(): void{
    console.log(this.id);
    this.messageBoxService.getPost(this.id)
      .subscribe((data: { messages: MessageInterface[] }) => {
        this.post = data.messages;
      });
  }
  deleteMessage(id: number): void {
    console.log(id, 'component');
    this.messageBoxService.deletePost(id).subscribe();
  }
  getEditWindow(id: number): void{
    // This code can be written better, but idk how
    const idString = id.toString();
    const place = document.getElementById(idString).querySelector('p.text');
    const input = document.createElement('input');
    const button = document.createElement('button');
    input.setAttribute('value', place.textContent);
    place.insertAdjacentElement('afterend', input);
    place.insertAdjacentElement('afterend', button);
    button.insertAdjacentText('beforeend', 'Send');
  }
  ngOnInit(): void {
    this.showPosts();
  }
  sendEditedMessage(): void {
    console.log('xyu');
  }
}
