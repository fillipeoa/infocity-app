import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        password: senha,
        username: email,
      }
      this.http.post(environment.api + '/authenticate', data).
        subscribe((result) => { 
          resolve(result); 
        },
          (error) => {
            reject(error.json);
            console.log(error);
          })
    });
  }

  getUsuarioLogin(email: String, senha: String){
    return new Promise((resolve, reject) => {
      this.http.get(environment.api + '/getUsuarioLogin?password='+senha+'&username='+email).
        subscribe((result) => { 
          resolve(result); 
        },
          (error) => {
            reject(error.json);
            console.log(error);
          })
    });
  }
}
