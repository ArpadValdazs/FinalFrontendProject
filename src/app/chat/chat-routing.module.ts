import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatComponent} from './chat/chat.component';

const chatRoutes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./chat/chatbox/room.module').then(m => m.RoomModule),
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
