import { Component, OnInit } from '@angular/core';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';
import { UsuarioService } from 'src/app/sevices/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-colaboracao',
  templateUrl: './detalhe-colaboracao.page.html',
  styleUrls: ['./detalhe-colaboracao.page.scss'],
})
export class DetalheColaboracaoPage implements OnInit {

  constructor(private colaboracaoService : ColaboracaoService) { }

  ngOnInit() {
  }

  async avaliar(evento){
    var colaboracaoAvaliar;
    colaboracaoAvaliar = await this.colaboracaoService.buscarColaboracao(1);
    colaboracaoAvaliar.avaliacao = evento.rating;
    await this.colaboracaoService.updateColaboracao(colaboracaoAvaliar);
  }
}
