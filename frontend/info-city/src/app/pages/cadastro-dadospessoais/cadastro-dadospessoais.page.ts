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
    email: '',
    password: '',
    cidade: {
      id: 0,
      nome: '',
      estado: {
        id: 0,
        nome: '',
        abreviacao: '',
      }
    },
    foto: '',
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

   ionViewWillEnter() {
     if (JSON.parse(localStorage.getItem('cadastroUsuario'))) {
      localStorage.setItem('usuarioLogado', JSON.stringify([]));
     }
     localStorage.setItem('usuarioLogado', JSON.stringify([]));
  }

  

  ngOnInit() { }

  continuar() {
    localStorage.setItem('cadastroUsuario', JSON.stringify(this.usuario));
    this.router.navigateByUrl('/cadastro-localizacao')
  }

  voltar(){
    localStorage.removeItem("cadastroUsuario");
    this.router.navigateByUrl("/index")
  }

}
