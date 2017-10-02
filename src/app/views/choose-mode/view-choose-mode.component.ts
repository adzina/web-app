import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
var jwt_decode = require('jwt-decode');
@Component({
  moduleId: module.id,
  selector: 'choose-mode',
  templateUrl: 'view-choose-mode.component.html',
})
export class ChooseModeComponent{

  jwt: string;
  decodedJwt: string;
  response: string;
  mode: number;

  constructor(private _router: Router,private _loginService: LoginService, private authHttp: AuthHttp){
    this.jwt = localStorage.getItem('token');
    this.decodedJwt = this.jwt && jwt_decode(this.jwt);
    this.mode=null;
    this.setUserID();
  }
  setmode(m:number){
    if(!m)this._router.navigate(['/register']);
    else this._router.navigate(['/teacher-create-lesson']);
  }
  //===================================
  setUserID(){
    this._loginService.setUserID('4');
  }
  //====================================
}
