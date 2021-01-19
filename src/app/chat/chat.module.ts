import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {ChatboxModule} from './chat/chatbox/chatbox.module';
import {SettingsComponent} from './chat/settings/settings.component';
import {RouterModule} from '@angular/router';
import {ChatRoutingModule} from './chat-routing.module';


@NgModule({
  declarations: [SettingsComponent],
  exports: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    // ChatboxModule,
    RouterModule,
    ChatRoutingModule
  ],
  bootstrap: [SettingsComponent]
})
export class ChatModule { }
