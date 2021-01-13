import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() SignupAction = new EventEmitter<string>();
  regForm = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    });
  constructor() { }
  onSubmitSignup(): void{
    console.warn(this.regForm.value);
  }

  ngOnInit(): void {
  }

}
