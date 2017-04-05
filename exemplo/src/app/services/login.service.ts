import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) {

  }
  public login(body: any) {

    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append("Content-Type", 'application/json');
    headers.append("user.login", body.id);
    headers.append("user.password", body.senha);
    headers.append("skipLoading", "true");
    return this.http.get(environment.urlCore + "login", { headers: headers });
  }
}
