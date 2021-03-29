import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDadospessoaisPageRoutingModule } from './cadastro-dadospessoais-routing.module';

import { CadastroDadospessoaisPage } from './cadastro-dadospessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDadospessoaisPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroDadospessoaisPage]
})
export class CadastroDadospessoaisPageModule {}
