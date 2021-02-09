import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLocalizacaoPage } from './cadastro-localizacao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLocalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLocalizacaoPageRoutingModule {}
