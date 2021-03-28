import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-dadospessoais',
  templateUrl: './cadastro-dadospessoais.page.html',
  styleUrls: ['./cadastro-dadospessoais.page.scss'],
})
export class CadastroDadospessoaisPage implements OnInit {
  usuario = {
    id: null,
    nome: null,
    email: null,
    password: null,
    foto: null,
    cidade: null,
    bairro: null
  }

  constructor(private router: Router) { }

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
