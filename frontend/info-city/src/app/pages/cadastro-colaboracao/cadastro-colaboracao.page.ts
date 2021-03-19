import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-colaboracao',
  templateUrl: './cadastro-colaboracao.page.html',
  styleUrls: ['./cadastro-colaboracao.page.scss'],
})
export class CadastroColaboracaoPage implements OnInit {

  colaboracao = {
    id: null,
    id_usuario: null,
    titulo: null,
    descricao: null,
    cidade: null,
    rua: null,
    numero: null,
    bairro: null,
    complemento: null
  }

  constructor( private router: Router) { }

  ngOnInit() {}

  criar(){
    var colaboracoes = JSON.parse(localStorage.getItem('colaboracoes'));
    var usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (colaboracoes == null) {
      colaboracoes = [];
      localStorage.setItem('colaboracoes', JSON.stringify(colaboracoes));
    }

    this.colaboracao.id = colaboracoes.length + 1;
    this.colaboracao.id_usuario = usuario.id;
    colaboracoes.push(this.colaboracao);
    localStorage.setItem('colaboracoes', JSON.stringify(colaboracoes));

    this.router.navigate(['colaboracoes']);
  }

}
