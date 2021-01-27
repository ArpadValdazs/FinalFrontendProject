import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatComponent} from '../chat.component';
import {ChatboxComponent} from './chatbox/chatbox.component';

const chatboxRoutes: Routes = [
  {
    path: '',
    component: ChatboxComponent
  }
];
/*Может, этот модуль и не нужен вовсе?*/
@NgModule({
  imports: [
    RouterModule.forChild(chatboxRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ChatboxRoutingModule { }
