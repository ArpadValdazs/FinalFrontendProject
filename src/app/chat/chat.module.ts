import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {ChatboxModule} from './chat/chatbox/chatbox.module';
import {SettingsComponent} from './chat/settings/settings.component';


@NgModule({
  declarations: [ChatComponent, SettingsComponent],
  exports: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatboxModule
  ]
})
export class ChatModule { }
