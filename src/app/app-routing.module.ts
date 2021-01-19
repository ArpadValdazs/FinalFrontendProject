import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth/auth.component';
import {ChatComponent} from './chat/chat/chat.component';

const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupComponent, AuthComponent, ChatComponent];
