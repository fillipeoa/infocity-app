import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';
import { UsuarioService } from 'src/app/sevices/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-colaboracao',
  templateUrl: './detalhe-colaboracao.page.html',
  styleUrls: ['./detalhe-colaboracao.page.scss'],
})
export class DetalheColaboracaoPage implements OnInit {

  constructor(private colaboracaoService : ColaboracaoService, private route: ActivatedRoute) { 
    this.buscarColaboracao();
  }

  public colaboracao;
  public situacoes;
  public carregou = false;

  ngOnInit() {
    
  }

  async buscarColaboracao(){
    const id = this.route.snapshot.paramMap.get('id');
    this.colaboracao = await this.colaboracaoService.buscarColaboracao(id); 
    this.situacoes = await this.colaboracaoService.getSituacoes(this.colaboracao.id); 
    console.log(this.situacoes);
    this.carregou = true;
  }

  async avaliar(evento){
    var colaboracaoAvaliar;
    colaboracaoAvaliar = await this.colaboracaoService.buscarColaboracao(this.colaboracao.id);
    colaboracaoAvaliar.avaliacao = evento.rating;
    await this.colaboracaoService.updateColaboracao(colaboracaoAvaliar);
  }
}
