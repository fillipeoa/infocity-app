import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Estado } from 'src/app/interfaces/estado/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  getEstados() {
    return new Promise<Estado[]>(resolve => {
      var token = JSON.parse(localStorage.getItem('token'));
      const options = {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+token.token}
      };

      console.log(options);

      this.http.get<Estado[]>(environment.api + '/estados/', options).subscribe(data => {
        resolve(data);
        console.log(data);
      },
        err => {
          console.log(err);
        });
    });


  }
}
