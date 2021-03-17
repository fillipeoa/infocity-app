import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: null,
    senha: null
  }

  constructor(private router: Router,  public toastController: ToastController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    localStorage.setItem('usuarioLogado', JSON.stringify([]));
  }

  entrar(){
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    var logou = false;
    for (const usuario of usuarios) {
      if (usuario.email == this.login.email && usuario.password == this.login.senha) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.router.navigate(['tabs/home'])
        logou = true;
      }
    }
    if(!logou){
      this.exibirMensagem();
    }
  }

  async exibirMensagem() {
    const toast = await this.toastController.create({
      message: 'Usuário e/ou senha incorretos.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }


}
