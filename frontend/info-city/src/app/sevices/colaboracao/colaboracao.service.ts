import { Injectable } from '@angular/core';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboracaoService {

  constructor(private http: HttpClient) { }

  createColaboracao(colaboracao: Colaboracao) {
    return new Promise((resolve, reject) => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.token }
      };
      this.http.post(environment.api + '/colaboracoes/', colaboracao).
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

  getColaboracoesPorCidade(id: number) {
    return new Promise<Colaboracao[]>(resolve => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.token }
      };

      this.http.get<Colaboracao[]>(environment.api + '/colaboracoes/cidade/' + id, options).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getColaboracoesUsuarioLogado(id: number) {
    return new Promise<Colaboracao[]>(resolve => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.token }
      };

      this.http.get<Colaboracao[]>(environment.api + '/colaboracoes/usuario/' + id, options).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
}
