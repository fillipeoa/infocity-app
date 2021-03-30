import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { Estado } from 'src/app/interfaces/estado/estado';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { EstadoService } from 'src/app/sevices/estado/estado.service';
import { ToastController } from '@ionic/angular';
import { CidadeService } from 'src/app/sevices/cidade/cidade.service';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';

@Component({
  selector: 'app-cadastro-colaboracao',
  templateUrl: './cadastro-colaboracao.page.html',
  styleUrls: ['./cadastro-colaboracao.page.scss'],
})
export class CadastroColaboracaoPage implements OnInit {

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  cidadesEstado: Cidade[] = [];

  colaboracao: Colaboracao = {
    id: 0,
    titulo: '',
    descricao: '',
    cidade: {
      id: 0,
      nome: '',
      estado: {
        id: 0,
        nome: '',
        abreviacao: '',
      }
    },
    usuario: {
      id: 0,
      nome: '',
      email: '',
      password: '',
      cidade: null,
      userName: '', 
      created_at: null, 
      updated_at: null,
      role: null
    },
    rua: '',
    numero: 0,
    bairro: '',
    complemento: '',
    latitude: 0.0,
    longitude: 0.0,
    created_at: null,
    updated_at: null
  }

  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private estadoService: EstadoService, public toastController: ToastController, private cidadeService: CidadeService, private colaboracaoService: ColaboracaoService) {
    this.formGroup = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      estado: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      rua: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      complemento: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });

    this.getEstados();
    this.getCidades();
  }

  ngOnInit() { }

  criar() {
    this.colaboracao.usuario.id = 1;
    this.colaboracaoService.createColaboracao(this.colaboracao)
      .then(data => {
        if (data) {
          console.log(data);
        }

      }).catch((err) => {
        this.exibirMensagem('Email ou senha incorretos');
      });
  }

  getEstados() {
    this.estadoService.getEstados()
      .then(data => {
        if (data) {
          this.estados = data;
        }
      }).catch((err) => {
        this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
      }
      );
  }

  getCidades() {
    this.cidadeService.getCidades()
      .then(data => {
        if (data) {
          this.cidades = data;
        }
      }).catch((err) => {
        this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
      }
      );

  }

  getCidadesDoEstado() {
    this.cidadesEstado = [];
    this.colaboracao.cidade.id = 0;
    for (const cidade of this.cidades) {
      if (cidade.estado.id == this.colaboracao.cidade.estado.id) {
        this.cidadesEstado.push(cidade);
        console.log(this.cidadesEstado);
      }
    }
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
