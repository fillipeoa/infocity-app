import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaboracao } from 'src/app/interfaces/colaboracao/colaboracao';
import { Estado } from 'src/app/interfaces/estado/estado';
import { Cidade } from 'src/app/interfaces/cidade/cidade';
import { EstadoService } from 'src/app/sevices/estado/estado.service';
import { ToastController } from '@ionic/angular';
import { CidadeService } from 'src/app/sevices/cidade/cidade.service';
import { ColaboracaoService } from 'src/app/sevices/colaboracao/colaboracao.service';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-cadastro-colaboracao',
  templateUrl: './cadastro-colaboracao.page.html',
  styleUrls: ['./cadastro-colaboracao.page.scss'],
})
export class CadastroColaboracaoPage implements OnInit {

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  cidadesEstado: Cidade[] = [];

  usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  gps: boolean = false;
  bairro: boolean = false;


  colaboracao: Colaboracao = {
    id: 0,
    titulo: '',
    descricao: '',
    cidade: {
      id: 0,
      nome: '',
      estado: {
        id: 0,
        nome: '',
        abreviacao: '',
      }
    },
    usuario: {
      id: 0,
      email: '',
      password: '',
      cidade: null,
      userName: '',
      created_at: null,
      updated_at: null,
      role: null,
      foto: ''
    },
    rua: '',
    avaliacao: 0,
    numero: 0,
    bairro: '',
    complemento: '',
    latitude: 0.0,
    longitude: 0.0,
    created_at: null,
    updated_at: null,
  }

  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private estadoService: EstadoService, public toastController: ToastController, private cidadeService: CidadeService, private colaboracaoService: ColaboracaoService, private geolocation: Geolocation) {
    if (!this.usuario.id) {
      this.router.navigateByUrl("/index");
    }

    this.formGroup = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      estado: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      rua: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      complemento: ['', Validators.minLength(5)],
    });

    this.getEstados();
    this.getCidades();
  }

  ngOnInit() { }

  criar() {
    this.colaboracao.usuario.id = this.usuario.id;
    this.colaboracaoService.createColaboracao(this.colaboracao)
      .then(data => {
        if (data) {
          this.router.navigateByUrl("/tabs/home")
        }

      }).catch((err) => {
        this.exibirMensagem('Error ao criar colaboração');
      });
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
    this.colaboracao.cidade.id = 0;
    for (const cidade of this.cidades) {
      if (cidade.estado.id == this.colaboracao.cidade.estado.id) {
        this.cidadesEstado.push(cidade);
      }
    }
  }

  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.colaboracao.latitude = resp.coords.latitude;
        this.colaboracao.longitude = resp.coords.longitude;
        this.colaboracaoService.getLocation(this.colaboracao.latitude, this.colaboracao.longitude).subscribe(
          data => {
            var achou = false;
            if (data && data['address']) {
              for (const cidade of this.cidades) {
                if (cidade.nome == data['address']['town'] && cidade.estado.nome == data['address']['state']  || cidade.nome == data['address']['city'] && cidade.estado.nome == data['address']['state']) {
                  achou = true;
                  this.gps = true;
                  this.colaboracao.cidade.estado.id = cidade.estado.id;
                  this.colaboracao.cidade.id = cidade.id;
                  this.colaboracao.cidade.estado.nome = cidade.estado.nome;
                  this.colaboracao.cidade.nome = cidade.nome;
                  this.colaboracao.rua = data['address']['road']
                  if (data['address']['neighbourhood']) {
                    this.bairro = true;
                    this.colaboracao.bairro = data['address']['neighbourhood'];
                  }
                }
              }
              if (achou == false) {
                this.exibirMensagem('Ainda não estamos trabalhando nessa cidade');
              }
            }
          }
        )
      }).catch((error) => {
        this.exibirMensagem('Erro ao recuperar sua localização: ');
      });

  }

  disabilitarGps(){
    this.gps = false;
    this.bairro = false;
    this.colaboracao.cidade = {
      id: 0,
      nome: '',
      estado: {
        id: 0,
        nome: '',
        abreviacao: '',
      }
    }
    this.colaboracao.rua = '';
    this.colaboracao.bairro= '';
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
