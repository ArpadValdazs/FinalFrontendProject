import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() SignupAction = new EventEmitter<string>();
  signupForm = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    });
  constructor(private signupService: SignupService) { }
  onSubmitSignup(): void{
    this.signupService.signupAction(this.signupForm.value).subscribe();
    console.warn();
  }

  ngOnInit(): void {
  }

}
