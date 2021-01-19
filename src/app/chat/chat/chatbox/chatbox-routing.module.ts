import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatComponent} from '../chat.component';
import {ChatboxComponent} from './chatbox/chatbox.component';

const chatRoutes: Routes = [];
/*Может, этот модуль и не нужен вовсе?*/
@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ChatboxRoutingModuleRoutingModule { }
