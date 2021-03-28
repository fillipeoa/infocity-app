import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheColaboracaoPageRoutingModule } from './detalhe-colaboracao-routing.module';

import { DetalheColaboracaoPage } from './detalhe-colaboracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheColaboracaoPageRoutingModule
  ],
  declarations: [DetalheColaboracaoPage]
})
export class DetalheColaboracaoPageModule {}
