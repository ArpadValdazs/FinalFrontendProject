import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import {TextBoxComponent} from './chatbox/text-box/text-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {routingComponents} from '../../../app-routing.module';
import {MessageBoxComponent} from './chatbox/message-box/message-box.component';
import {RouterModule} from '@angular/router';
// @ts-ignore
import {ChatboxRoutingModule} from './chatbox-routing.module';

@NgModule({
  declarations: [ChatboxComponent, TextBoxComponent, MessageBoxComponent],
  exports: [
    MessageBoxComponent,
    TextBoxComponent,
    ChatboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ChatboxRoutingModule
  ]

})
export class ChatboxModule { }
