import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  irParaLogin(){
    this.router.navigateByUrl("/login");
  }

  ionViewWillEnter() {
    localStorage.setItem('usuarioLogado', JSON.stringify([]));
  }

  irParaCadastrar(){
    this.router.navigateByUrl("/cadastro-dadospessoais");
  }

}
