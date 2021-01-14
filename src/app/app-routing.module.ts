import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageBoxComponent} from './chat/chat/chatbox/chatbox/message-box/message-box.component';
import {AuthComponent} from './auth/auth.component';
import {SignupComponent} from './signup/signup.component';

/*Сюда роуты будем получать тоже с сервера*/
const routes: Routes = [
  {path: 'chat1', component: MessageBoxComponent},
  {path: 'chat2', component: MessageBoxComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MessageBoxComponent, AuthComponent, SignupComponent];
