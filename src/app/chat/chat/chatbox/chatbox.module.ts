import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import {TextBoxComponent} from './chatbox/text-box/text-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {routingComponents} from '../../../app-routing.module';
import {MessageBoxComponent} from './chatbox/message-box/message-box.component';
import {ChatModule} from '../../chat.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ChatboxComponent, TextBoxComponent, MessageBoxComponent, routingComponents],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatModule,
    RouterModule,
  ],
  exports: [
    MessageBoxComponent,
    TextBoxComponent,
    ChatboxComponent,
  ]
})
export class ChatboxModule { }
