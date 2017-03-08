import {Component} from '@angular/core';

import {RegisterService} from '../services/register.service';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private user: any = {
    account: '',
    password: '',
    replayPassword: '',
    petName: '',
    email: '',
    submitFlag: false,
    captcha: ''
  };
  private captcha = '/getCaptcha';

  constructor(private service: RegisterService) {

  }

  submitUser() {
    /*this.service.registerUser(this.user).then(response =>{

     });*/
    alert('暂未开放。');
  }

  validationPassword() {
    if (this.user.password && this.user.replayPassword && this.user.password != this.user.replayPassword) {

    }
  }

  refreshCaptcha() {
    this.captcha = '/getCaptcha?_i=' + Math.random();
  }
}
