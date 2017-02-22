import {Component} from '@angular/core';
import {} from ''

import {RegisterService} from '../services/register.service';

declare var $: any;

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
    submitFlag: false
  };

  constructor(private service: RegisterService) {

  }

  submitUser() {
    
    alert('暂未开放。');
  }

  validationPassword() {
    if (this.user.password && this.user.replayPassword && this.user.password != this.user.replayPassword) {

    }
  }
}
