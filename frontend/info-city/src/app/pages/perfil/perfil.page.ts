import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  constructor(private router: Router) { 
    if (!this.usuario.id) {
      this.router.navigateByUrl("/index");
    }
  }

  ngOnInit() {
  }

}
