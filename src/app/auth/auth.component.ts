import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() authSend = new EventEmitter<string>();
  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }
  onSubmitAuth(): void{
    console.warn(this.authForm.value);
  }

  ngOnInit(): void {
  }

}
