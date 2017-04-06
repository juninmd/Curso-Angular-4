import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }
  private usuario: any = {};
  submit() {
    this.loginService.login(this.usuario).subscribe(q => console.log(q));
  }
}
