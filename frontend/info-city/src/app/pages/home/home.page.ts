import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colaboracoes: Colaboracao[] = [];
  //usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));;

  constructor(private colaboracaoService: ColaboracaoService, private toastController: ToastController) { 
    this.getColaboracoesPorCidade();
  }


  getColaboracoesPorCidade() {
    this.colaboracaoService.getColaboracoesPorCidade(3)
      .then(data => {
        if (data) {
          this.colaboracoes = data;
          console.log(this.colaboracoes);
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
