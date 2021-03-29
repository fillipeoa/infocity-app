import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroColaboracaoPageRoutingModule } from './cadastro-colaboracao-routing.module';

import { CadastroColaboracaoPage } from './cadastro-colaboracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroColaboracaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroColaboracaoPage]
})
export class CadastroColaboracaoPageModule {}
