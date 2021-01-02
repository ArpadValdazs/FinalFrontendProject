import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MessageBoxComponent } from './chat/message-box/message-box.component';
import { TextBoxComponent } from './chat/text-box/text-box.component';



@NgModule({
  declarations: [ChatComponent, MessageBoxComponent, TextBoxComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
