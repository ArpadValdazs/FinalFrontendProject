import {Component, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Output() sendMessage = new EventEmitter<string>();
  sendText = new FormControl('');
  onSubmit(value: string): void {
    this.sendMessage.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
