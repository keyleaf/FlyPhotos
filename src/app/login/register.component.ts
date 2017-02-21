import {Component} from '@angular/core';

import {RegisterService} from '../services/register.service';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service : RegisterService){

  }
}
