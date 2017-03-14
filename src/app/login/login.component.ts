import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RegisterService} from '../services/register.service';
import {LoginService} from"../services/login.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./register.component.css']
})
export class LoginComponent {
  private captcha = '/getCaptcha';

  private user: any = {
    account: '',
    password: '',
  };

  constructor(private service: RegisterService, private router: Router,private loginService:LoginService) {

  }

  refreshCaptcha() {
    this.captcha = '/getCaptcha?_i=' + Math.random();
  }

  login()  {
    this.service.login(this.user).then(response => {
      let result = response.json();
      if(result.info === 'Success'){
        sessionStorage.setItem("user", JSON.stringify(result.user));
        this.router.navigate(['']);
        this.loginService.changeLogin(result.user);
      } else {
        alert('登陆失败。');
      }
    })
  }


}
