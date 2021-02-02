import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './chatbox/room.component';
import {TextBoxComponent} from './chatbox/text-box/text-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {routingComponents} from '../../../app-routing.module';
import {MessageBoxComponent} from './chatbox/message-box/message-box.component';
import {RouterModule} from '@angular/router';
// @ts-ignore
import {RoomRoutingModule} from './room-routing.module';

@NgModule({
  declarations: [RoomComponent, TextBoxComponent, MessageBoxComponent],
  exports: [
    MessageBoxComponent,
    TextBoxComponent,
    RoomComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RoomRoutingModule
  ]

})
export class RoomModule { }
