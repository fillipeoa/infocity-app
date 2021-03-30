import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { Estado } from 'src/app/interfaces/estado/estado';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

@Component({
  selector: 'app-cadastro-localizacao',
  templateUrl: './cadastro-localizacao.page.html',
  styleUrls: ['./cadastro-localizacao.page.scss'],
})
export class CadastroLocalizacaoPage implements OnInit {

  Estados: Estado[] = [];
  Cidades: Cidade[] = [];

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    password: '',
    userName: '', 
    created_at: null, 
    updated_at: null, 
    role: null,
    cidade: {
      id: 0, 
      nome: '', 
      estado: {
        id: 0, 
        nome: '', 
        abreviacao: '',
      }
    },
  }

  formGroup: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      estado: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    for (const usuario of usuarios) {
      if (usuario.id == id) {
        this.usuario.id = usuario.id;
        this.usuario.nome = usuario.nome;
        this.usuario.email = usuario.email;
        this.usuario.password = usuario.password;
      }
    }
  }

  ngOnInit() {}

  cadastrar(){
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    for (let index = 0; index < usuarios.length; index++) {
      if (usuarios[index].id == this.usuario.id) {
        usuarios[index] = this.usuario;
      }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioLogado', JSON.stringify(this.usuario));
    this.router.navigate(['/home']);
  }

}
