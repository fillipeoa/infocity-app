import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLocalizacaoPageRoutingModule } from './cadastro-localizacao-routing.module';

import { CadastroLocalizacaoPage } from './cadastro-localizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLocalizacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroLocalizacaoPage]
})
export class CadastroLocalizacaoPageModule {}
