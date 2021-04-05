import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  getCidades() {
    return new Promise<Cidade[]>(resolve => {
      const options = {
        headers: { 'Content-Type': 'application/json',}
      };

      this.http.get<Cidade[]>(environment.api + '/cidades/', options).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });


  }
}
