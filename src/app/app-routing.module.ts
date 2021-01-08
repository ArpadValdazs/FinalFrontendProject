import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageBoxComponent} from './chat/chat/chatbox/chatbox/message-box/message-box.component';

/*Сюда роуты будем получать тоже с сервера*/
const routes: Routes = [
  {path: 'chat1', component: MessageBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MessageBoxComponent];
