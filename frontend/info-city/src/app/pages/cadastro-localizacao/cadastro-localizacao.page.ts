import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { Estado } from 'src/app/interfaces/estado/estado';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { EstadoService } from 'src/app/sevices/estado/estado.service';
import { CidadeService } from 'src/app/sevices/cidade/cidade.service';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/sevices/usuario/usuario.service';
import { LoginService } from 'src/app/sevices/login/login.service';

@Component({
  selector: 'app-cadastro-localizacao',
  templateUrl: './cadastro-localizacao.page.html',
  styleUrls: ['./cadastro-localizacao.page.scss'],
})
export class CadastroLocalizacaoPage implements OnInit {
  estados: Estado[] = [];
  cidades: Cidade[] = [];
  cidadesEstado: Cidade[] = [];

  usuario: Usuario = {
    id: 0,
    email: '',
    password: '',
    userName: '',
    created_at: null,
    updated_at: null,
    role: null,
    foto: '',
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

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private estadoService: EstadoService, private cidadeService: CidadeService, private toastController: ToastController, private usuarioService: UsuarioService, private loginService: LoginService) {
    this.formGroup = this.formBuilder.group({
      estado: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewWillEnter() {
    this.usuario = JSON.parse(localStorage.getItem('cadastroUsuario'));
    this.getEstados();
    this.getCidades();
  }

  getEstados() {
    this.estadoService.getEstados()
      .then(data => {
        if (data) {
          this.estados = data;
        }
      }).catch((err) => {
        this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
      }
      );
  }

  getCidades() {
    this.cidadeService.getCidades()
      .then(data => {
        if (data) {
          this.cidades = data;
        }
      }).catch((err) => {
        this.exibirMensagem('Erro ao conectar com o banco de dados. Tente novamente mais tarde.');
      }
      );

  }

  getCidadesDoEstado() {
    this.cidadesEstado = [];
    this.usuario.cidade.id = 0;
    for (const cidade of this.cidades) {
      if (cidade.estado.id == this.usuario.cidade.estado.id) {
        this.cidadesEstado.push(cidade);
      }
    }
  }

  ngOnInit() { }

  cadastrar() {    
    this.usuarioService.createUsuario(this.usuario)
    .then(data => {
      if (data) {
        localStorage.removeItem("cadastroUsuario");
        this.getUsuarioLogin();

        setTimeout(() => {
          this.router.navigateByUrl("/tabs/home");
        }, 2000);
        
      }

    }).catch((err) => {
      this.exibirMensagem('falha ao cadastrar usuario');
    });
  }

  getUsuarioLogin(){
    this.loginService.getUsuarioLogin(this.usuario.email, this.usuario.password)
      .then(data => {
        if(data){
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
