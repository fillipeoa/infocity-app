import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/sevices/login/login.service';
import { environment } from '../../../environments/environment';


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

  formGroup: FormGroup

  constructor(private router: Router, public toastController: ToastController, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required])],
    });

  }

  ngOnInit() { }

  ionViewWillEnter() {
    localStorage.setItem('usuarioLogado', JSON.stringify([]));
  }

  entrar() {
    this.loginService.authenticate(this.login.email, this.login.senha)
      .then(async data => {
        if (data) {
          localStorage.setItem('token', JSON.stringify(data));
          await this.getUsuarioLogin();
          setTimeout(() => {
            this.router.navigateByUrl("/tabs/home")
          }, 3000);

        }

      }).catch((err) => {
        this.exibirMensagem('Email ou senha incorretos');
      });

  }


  getUsuarioLogin() {

    this.loginService.getUsuarioLogin(this.login.email, this.login.senha)
      .then(data => {
        if (data) {
          localStorage.setItem('usuarioLogado', JSON.stringify(data));
        }
      }).catch((err) => {
        this.exibirMensagem('Email ou senha incorretos');
      });

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
