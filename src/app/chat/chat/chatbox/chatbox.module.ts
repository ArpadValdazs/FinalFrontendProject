import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import {TextBoxComponent} from './chatbox/text-box/text-box.component';
import {MessageBoxComponent} from './chatbox/message-box/message-box.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ChatboxComponent, TextBoxComponent, MessageBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextBoxComponent,
    MessageBoxComponent,
    ChatboxComponent
  ]
})
export class ChatboxModule { }
