import  {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService{
  private headers = new Headers({'Content-Type': 'application/json'});
f
  constructor(private http:Http){

  }

}
