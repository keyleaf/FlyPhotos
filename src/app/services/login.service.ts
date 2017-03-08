import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs/Rx";

@Injectable()
export class LoginService{
  engineStatus:Observable<boolean>;
  private  observer:Observer<boolean>;
  constructor(){
    this.engineStatus= new Observable<boolean>(observer=>this.observer=observer).share();
  }

  changeLogin(user:any) {
    this.observer.next(user);
  };

}
