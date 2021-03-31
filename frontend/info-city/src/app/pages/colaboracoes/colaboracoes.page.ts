import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';

@Component({
  selector: 'app-colaboracoes',
  templateUrl: './colaboracoes.page.html',
  styleUrls: ['./colaboracoes.page.scss'],
})
export class ColaboracoesPage implements OnInit {

  colaboracoes: Colaboracao[] = [];
  usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));


  constructor(private colaboracaoService: ColaboracaoService, private toastController: ToastController, private router: Router) { 
    if (!this.usuario.id) {
      this.router.navigateByUrl("/index");
    }
  }
  
  ngOnInit() {
    this.getColaboracoesUsuarioLogado();
  }

  getColaboracoesUsuarioLogado() {
    this.colaboracaoService.getColaboracoesUsuarioLogado(this.usuario.id)
      .then(data => {
        if (data) {
          this.colaboracoes = data;
        }
      }).catch((err) => {
        this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
      }
      );
  }

  async exibirMensagem(menssagem: string) {
    const toast = await this.toastController.create({
      message: menssagem,
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

}
