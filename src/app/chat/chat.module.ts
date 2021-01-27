import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from './chat/settings/settings.component';
import {RouterModule} from '@angular/router';
import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from './chat/chat.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SettingsComponent, ChatComponent],
  exports: [
    ChatComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [SettingsComponent, ChatComponent]
})
export class ChatModule { }
