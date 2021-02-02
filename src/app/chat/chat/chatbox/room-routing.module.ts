import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatComponent} from '../chat.component';
import {RoomComponent} from './chatbox/room.component';

const roomRoutes: Routes = [
  {
    path: '',
    component: RoomComponent
  }
];
/*Может, этот модуль и не нужен вовсе?*/
@NgModule({
  imports: [
    RouterModule.forChild(roomRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoomRoutingModule { }
