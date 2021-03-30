import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

@Component({
  selector: 'app-cadastro-dadospessoais',
  templateUrl: './cadastro-dadospessoais.page.html',
  styleUrls: ['./cadastro-dadospessoais.page.scss'],
})
export class CadastroDadospessoaisPage implements OnInit {
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    password: '',
    cidade: null,
    userName: '', 
    created_at: null, 
    updated_at: null,
    role: null
  }

  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
   }

  ngOnInit() { }

  continuar() {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));

    if (usuarios == null) {
      usuarios = [];
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }


    this.usuario.id = usuarios.length + 1;
    usuarios.push(this.usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.router.navigate(['cadastro-localizacao', this.usuario.id]);

  }

}
