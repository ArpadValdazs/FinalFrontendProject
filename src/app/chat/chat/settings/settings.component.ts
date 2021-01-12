import { Component, OnInit } from '@angular/core';
import {ChatComponent} from '../chat.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  private chatComponent: ChatComponent;
  sortByName(): void{
    const sorter = this.chatComponent.rooms;
    /*for(let i = 0; i > 0; i++){
      sorter[i].id;
    }*/

  }

  ngOnInit(): void {
    this.sortByName();
  }

}
