import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colaboracoes = [];
  usuario = JSON.parse(localStorage.getItem('usuarioLogado'));;

  constructor() { }

  ionViewWillEnter() {
    this.colaboracoes = [];
    const colaboracoes = JSON.parse(localStorage.getItem('colaboracoes'));

    for (const colaboracao of colaboracoes) {
      if (colaboracao.cidade == this.usuario.cidade) {
        this.colaboracoes.push(colaboracao);
      }
    }
  }

}
