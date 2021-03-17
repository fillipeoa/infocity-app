import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboracoes',
  templateUrl: './colaboracoes.page.html',
  styleUrls: ['./colaboracoes.page.scss'],
})
export class ColaboracoesPage implements OnInit {

  colaboracoes = [];

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const colaboracoes = JSON.parse(localStorage.getItem('colaboracoes'));

    for (const colaboracao of colaboracoes) {
      if (colaboracao.id_usuario == usuario.id) {
        this.colaboracoes.push(colaboracao);
      }
    }
  }

}
