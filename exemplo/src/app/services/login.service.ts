import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }
  public login(body: any) {
    let headers = new Headers();
    headers.append("usuario.login", body.login);
    headers.append("usuario.senha", body.senha);
    return this.http.get(environment.urlCore + "login", { headers: headers });
  }
}
