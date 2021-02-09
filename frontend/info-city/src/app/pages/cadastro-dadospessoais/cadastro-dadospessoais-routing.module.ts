import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDadospessoaisPage } from './cadastro-dadospessoais.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDadospessoaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDadospessoaisPageRoutingModule {}
