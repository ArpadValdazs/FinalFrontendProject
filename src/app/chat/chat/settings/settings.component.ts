import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatComponent} from '../chat.component';
import {AuthService} from '../../../auth/auth.service';
import {findIndex} from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() rooms: object;
  @Output() roomsViewSwitch = new EventEmitter<object>();
  clickMarker = 0;
  initialRooms = {};
  constructor(
    private authService: AuthService,
  ) { }
  isAdmin = this.authService.getAdminStatus();
  // Method
  merge(array1, array2): object {
    const arraySort = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length){
      arraySort.push(
        (array1[i].id < array2[j].id) ? array1[i++] : array2[j++]
      );
    }
    return [
      ...arraySort,
      ...array1.slice(i),
      ...array2.slice(j)
    ];
  }

  mergeSort(arr): object{
    if (!arr || !arr.length){
      console.log('null');
      return null;
    }
    if (arr.length <= 1){
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    return this.merge(this.mergeSort(arrLeft), this.mergeSort(arrRight));
  }
  setInitialRooms(): object {
    // This array is empty? If it isn't, array returns. Some sort of Singleton
    if (!(this.initialRooms[0] === undefined)) {
      return this.initialRooms;
    } else {
      this.initialRooms = this.rooms;
    }
  }
  // The end of the method
  sortByName(): any{
    this.setInitialRooms();
    switch (this.clickMarker) {
      case 0:
        this.roomsViewSwitch.emit(this.mergeSort(this.rooms));
        this.clickMarker = 1;
        break;
      case 1:
        // @ts-ignore
        this.roomsViewSwitch.emit(this.rooms.reverse());
        this.clickMarker = 2;
        break;
      case 2:
        this.roomsViewSwitch.emit(this.initialRooms);
        this.clickMarker = 0;
        break;
    }
  }

  getValue(event): void {
    this.setInitialRooms();
    const roomNumber = event.target.value;
    const resultArray = [];
    roomNumber.toString();
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name.includes(roomNumber, 0)){
        resultArray.push(this.rooms[i]);
      }
    }
    console.log(this.initialRooms);
    if (roomNumber === ''){
      this.roomsViewSwitch.emit(this.initialRooms);
    } else {
      this.roomsViewSwitch.emit(resultArray);
    }
  }
  ngOnInit(): void {
  }

}
