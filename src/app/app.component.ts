import { Component} from '@angular/core';
import {LoginService} from"./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user:any = {};
  constructor(private loginService : LoginService){

  }

  logout(){
    sessionStorage.removeItem("user");
    this.user = {};
  }

  ngOnInit(user:any){
    this.loginService.engineStatus.subscribe(() =>{
      this.user = JSON.parse(sessionStorage.getItem("user"));
    });
  }
}
