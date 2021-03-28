import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroColaboracaoPageRoutingModule } from './cadastro-colaboracao-routing.module';

import { CadastroColaboracaoPage } from './cadastro-colaboracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroColaboracaoPageRoutingModule
  ],
  declarations: [CadastroColaboracaoPage]
})
export class CadastroColaboracaoPageModule {}
