import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  sendMessage = '';
  sendText = new FormGroup({
    input: new FormControl('')
  });
  onSubmit(): void {
    this.sendMessage = this.sendText.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
