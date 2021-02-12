import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroColaboracaoPage } from './cadastro-colaboracao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroColaboracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroColaboracaoPageRoutingModule {}
