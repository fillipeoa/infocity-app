import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-localizacao',
  templateUrl: './cadastro-localizacao.page.html',
  styleUrls: ['./cadastro-localizacao.page.scss'],
})
export class CadastroLocalizacaoPage implements OnInit {

  usuario = {
    id: null,
    nome: null,
    email: null,
    password: null,
    foto: null,
    cidade: null,
    bairro: null
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    for (const usuario of usuarios) {
      if (usuario.id == id) {
       this.usuario = {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          password: usuario.password,
          foto: usuario.foto,
          cidade: null,
          bairro: null
        }
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
