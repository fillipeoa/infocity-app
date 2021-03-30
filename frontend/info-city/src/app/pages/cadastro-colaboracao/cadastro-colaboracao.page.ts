import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { Estado } from 'src/app/interfaces/estado/estado';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { EstadoService } from 'src/app/sevices/estado/estado.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-colaboracao',
  templateUrl: './cadastro-colaboracao.page.html',
  styleUrls: ['./cadastro-colaboracao.page.scss'],
})
export class CadastroColaboracaoPage implements OnInit {

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  cidade: Cidade = null;

  colaboracao: Colaboracao = {
    id: 0,
    titulo: '',
    descricao: '',
    cidade: {
      id: 0, 
      nome: '', 
      estado:{
        id: 0, 
        nome: '', 
        abreviacao: '',
      }
    },
    usuario: null,
    rua: '',
    numero: 0,
    bairro: '',
    complemento: '',
    latitude: 0, 
    longitude: 0, 
    created_at: null, 
    updated_at: null
  }

  formGroup: FormGroup;

  constructor( private router: Router, private formBuilder: FormBuilder, private estadoService: EstadoService, public toastController: ToastController) { 
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
  }

  ngOnInit() {}

  criar(){}

  getEstados(){
    this.estadoService.getEstados()
    .then(data => {
      if (data) {
        this.estados = data;
        console.log(this.estados);
      }
    }).catch((err) => {
      this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
    }
    );
  }

  getCidades(){
    
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
