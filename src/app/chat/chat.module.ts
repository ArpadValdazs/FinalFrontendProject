import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from './chat/settings/settings.component';
import {RouterModule} from '@angular/router';
import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from './chat/chat.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmphasizeDirective } from './chat/emphasize.directive';


@NgModule({
  declarations: [SettingsComponent, ChatComponent, EmphasizeDirective],
  exports: [
    ChatComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [SettingsComponent, ChatComponent]
})
export class ChatModule { }
