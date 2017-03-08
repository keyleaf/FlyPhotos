import  {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  registerUser(user:any) {
    return this.http.post('/registerUser', JSON.stringify(user), {headers: this.headers}).toPromise();
  }

  getCaptcha() {
    return this.http.get("/getCaptcha?_r=" + Math.random()).toPromise();
  }

  login(user:any) {
    return this.http.post("/login", JSON.stringify({user: user}), {headers: this.headers}).toPromise();
  }

}
