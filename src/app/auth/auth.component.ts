import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {AuthService} from './auth.service';

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

  constructor(private authService: AuthService) { }
  sendAction(): void{
    this.authService.sendAuth(this.authForm.value).subscribe();
  }
  onSubmitAuth(): void{
  }

  ngOnInit(): void {
  }

}
