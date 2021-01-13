import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatComponent} from '../chat.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() rooms: object;
  @Output() sortAction = new EventEmitter<object>();
  constructor() { }
  sortByName(): any{
    // @ts-ignore
    for (let i = 0; i < this.rooms.length; i++){
      // @ts-ignore
      for (let j = 0; j < this.rooms.length - 1; j++) {
        const position = this.rooms[j];
        if (this.rooms[i].id < this.rooms[j].id){
          this.rooms[j] = this.rooms[i];
          this.rooms[i] = position;
        }
      }
    }
    console.log(this.rooms);
    this.sortAction.emit(this.rooms);
  }
  ngOnInit(): void {
  }

}
