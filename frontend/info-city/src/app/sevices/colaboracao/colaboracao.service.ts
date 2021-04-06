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
    console.log(colaboracao);
    return new Promise((resolve, reject) => {
      const options = {
        headers: { 'Content-Type': 'application/json'}
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

  buscarColaboracao(id) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: { 'Content-Type': 'application/json'}
      };
      this.http.get(environment.api + '/colaboracoes/' + id).
        subscribe((result) => {
          resolve(result);
        },
          (error) => {
            reject(error.json);
            console.log(error);
          })
    });
  }

  updateColaboracao(colaboracao: Colaboracao) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: { 'Content-Type': 'application/json'}
      };
      this.http.put(environment.api + '/colaboracoes/', colaboracao).
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
      const options = {
        headers: { 'Content-Type': 'application/json',}
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
      const options = {
        headers: { 'Content-Type': 'application/json'}
      };

      this.http.get<Colaboracao[]>(environment.api + '/colaboracoes/usuario/' + id, options).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getSituacoes(id: number) {
    return new Promise<Colaboracao[]>(resolve => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.token }
      };

      this.http.get<Colaboracao[]>(environment.api + '/situacoes/colaboracao/' + id, options).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getLocation(lat: number, long: number){
    const options = {
      headers: { 'Content-Type': 'application/json'}
    };
    return this.http.get(environment.locationApi + `format=json&lat=${lat}&lon=${long}&zoom=20`, options)
  }
}
