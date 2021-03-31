import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  createUsuario(usuario: Usuario) {
    return new Promise((resolve, reject) => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.token }
      };
      this.http.post(environment.api + '/usuarios/', usuario).
        subscribe((result) => {
          resolve(result);
          console.log(result);
        },
          (error) => {
            reject(error.json);
            console.log(error);
          })
    });
  }
}
