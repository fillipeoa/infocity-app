import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-dadospessoais',
    loadChildren: () => import('./pages/cadastro-dadospessoais/cadastro-dadospessoais.module').then( m => m.CadastroDadospessoaisPageModule)
  },
  {
    path: 'cadastro-localizacao',
    loadChildren: () => import('./pages/cadastro-localizacao/cadastro-localizacao.module').then( m => m.CadastroLocalizacaoPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'colaboracoes',
    loadChildren: () => import('./pages/colaboracoes/colaboracoes.module').then( m => m.ColaboracoesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
