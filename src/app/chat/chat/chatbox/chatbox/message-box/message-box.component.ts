import {Component, Input, OnInit, Output} from '@angular/core';
import {MessageBoxService} from './message-box.service';
import {MessageInterface} from '../../../../../../interfaces/message.interface';
import {ChatRoomService} from '../../../chat-room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ChatRoomsInterface} from '../../../../../../interfaces/chatRooms.interface';
import {EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  @Input() id: string;
  @Output() editEvent = new EventEmitter();
  post: MessageInterface[] = [];
  textItem: string;
  edit = false;
  itemId: number;
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

  ngOnInit(): void {
    this.showPosts();
  }
  getEditWindow(id: number, text: string): void{
    // This code can be written better, but idk how
    this.edit = true;
    this.itemId = id;
    this.textItem = text;
    console.log(this.textItem);
  }
  sendEdited(id, text): void {
    /*
    this.messageBoxService.sendEditedPost(id, text).subscribe();*/
  }
}
