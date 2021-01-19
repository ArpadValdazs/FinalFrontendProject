import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {ChatboxComponent} from './chat/chatbox/chatbox/chatbox.component';

const chatRoutes: Routes = [
  {
    path: './',
    component: ChatComponent,
    children: [
      {
        path: 'id',
        component: ChatboxComponent,
        // loadChildren: () => import('./chat/chatbox/chatbox.module').then(m => m.ChatboxModule)
  }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ChatRoutingModule { }
