import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';

@Component({
  selector: 'app-cadastro-colaboracao',
  templateUrl: './cadastro-colaboracao.page.html',
  styleUrls: ['./cadastro-colaboracao.page.scss'],
})
export class CadastroColaboracaoPage implements OnInit {

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

  constructor( private router: Router, private formBuilder: FormBuilder) { 
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
  }

  ngOnInit() {}

  criar(){
    var colaboracoes = JSON.parse(localStorage.getItem('colaboracoes'));
    var usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (colaboracoes == null) {
      colaboracoes = [];
      localStorage.setItem('colaboracoes', JSON.stringify(colaboracoes));
    }

    this.colaboracao.id = colaboracoes.length + 1;
    //this.colaboracao.id_usuario = usuario.id;
    colaboracoes.push(this.colaboracao);
    localStorage.setItem('colaboracoes', JSON.stringify(colaboracoes));

    this.router.navigate(['colaboracoes']);
  }

}
