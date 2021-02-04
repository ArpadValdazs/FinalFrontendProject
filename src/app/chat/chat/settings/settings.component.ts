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
  clickMarker = '0';
  cycleRooms = 'unclicked';
  constructor() { }
  sortLoop(sortDirection): any{
  }
  sortByName(): any{
    // Здесь идут повторения, я долго думал, можно ли чем-то заменить
    // Пузырёк следует заменить алгоритмом вставки, но я ещё не до конца его знаю
    // const onClicked = ['unclicked', 'clicked'];
    if (this.cycleRooms === 'unclicked'){
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
      this.cycleRooms = 'clicked';
    } else {
      // @ts-ignore
      for (let i = 0; i < this.rooms.length; i++){
        // @ts-ignore
        for (let j = 0; j < this.rooms.length - 1; j++) {
          const position = this.rooms[j];
          if (this.rooms[i].id > this.rooms[j].id){
            this.rooms[j] = this.rooms[i];
            this.rooms[i] = position;
          }
        }
      }
      this.cycleRooms = 'unclicked';
    }
    this.sortAction.emit(this.rooms);
  }

  getValue(event): void {
    const roomNumber = event.target.value;
    console.log(roomNumber);
  }
  ngOnInit(): void {
  }

}
