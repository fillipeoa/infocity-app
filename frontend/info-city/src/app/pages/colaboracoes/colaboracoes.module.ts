import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboracoesPageRoutingModule } from './colaboracoes-routing.module';

import { ColaboracoesPage } from './colaboracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboracoesPageRoutingModule
  ],
  declarations: [ColaboracoesPage]
})
export class ColaboracoesPageModule {}
