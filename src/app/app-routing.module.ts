import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageBoxComponent} from './chat/chat/chatbox/chatbox/message-box/message-box.component';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'chat2', component: MessageBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MessageBoxComponent, SignupComponent, AuthComponent];
