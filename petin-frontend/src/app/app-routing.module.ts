import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCategoriasComponent } from './Categorias/criar-categorias/criar-categorias.component';
import { EditarCategoriasComponent } from './Categorias/editar-categorias/editar-categorias.component';
import { ListarCategoriasComponent } from './Categorias/listar-categorias/listar-categorias.component';
import { CriarClientesComponent } from './Clientes/criar-clientes/criar-clientes.component';
import { EditarClientesComponent } from './Clientes/editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './Clientes/listar-clientes/listar-clientes.component';
import { CriarEstabelecimentosComponent } from './Estabelecimentos/criar-estabelecimentos/criar-estabelecimentos.component';
import { DetalharEstabelecimentoComponent } from './Estabelecimentos/detalhar-estabelecimento/detalhar-estabelecimento.component';
import { EditarEstabelecimentosComponent } from './Estabelecimentos/editar-estabelecimentos/editar-estabelecimentos.component';
import { ListarEstabelecimentosHomeComponent } from './Estabelecimentos/listar-estabelecimentos-home/listar-estabelecimentos-home.component';
import { ListarEstabelecimentosComponent } from './Estabelecimentos/listar-estabelecimentos/listar-estabelecimentos.component';
import { LoginComponent } from './usuario/login/login.component';
import { AreaAdministrativaComponent } from './Navegacao/area-administrativa/area-administrativa.component';
import { ContatoComponent } from './Navegacao/contato/contato.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { SobreNosComponent } from './Navegacao/sobre-nos/sobre-nos.component';
import { ConteudoAdmComponent } from './Navegacao/conteudo-adm/conteudo-adm.component';
import { AuthGuard } from './usuario/auth.guard';
import { CriarContaComponent } from './usuario/criar-conta/criar-conta.component';
import { EstabelecimentosClienteComponent } from './Estabelecimentos/estabelecimentos-cliente/estabelecimentos-cliente.component';
import { EstabelecimentoClienteEditarComponent } from './Estabelecimentos/estabelecimento-cliente-editar/estabelecimento-cliente-editar.component';
import { EstabelecimentoClienteCriarComponent } from './Estabelecimentos/estabelecimento-cliente-criar/estabelecimento-cliente-criar.component';

const routes: Routes = [


  {

    path: '',
    component: ConteudoAdmComponent,
    children: [
      // { path: '', component: AreaAdministrativaComponent, data: { title: 'Área Admnistrativa' } },
      { path: 'Area-Admnistrativa', component: AreaAdministrativaComponent, data: { title: 'Área Admnistrativa' } },
      { path: 'Clientes', component: ListarClientesComponent, data: { title: 'Clientes' } },
      { path: 'Cadastrar-Clientes', component: CriarClientesComponent, data: { title: 'Cadastrar Clientes' } },
      { path: 'Editar-Clientes/:id', component: EditarClientesComponent, data: { title: 'Editar Clientes' } },
      { path: 'Categorias', component: ListarCategoriasComponent, data: { title: 'Categorias' } },
      { path: 'Cadastrar-Categorias', component: CriarCategoriasComponent, data: { title: 'Cadastrar Categorias' } },
      { path: 'Editar-Categorias/:id', component: EditarCategoriasComponent, data: { title: 'Editar Categorias' } },
      { path: 'Estabelecimentos', component: ListarEstabelecimentosComponent, data: { title: 'Estabelecimentos' } },
      { path: 'Cadastrar-Estabelecimentos', component: CriarEstabelecimentosComponent, data: { title: 'Cadastrar Estabelecimentos' } },
      { path: 'Editar-Estabelecimentos/:id', component: EditarEstabelecimentosComponent, data: { title: 'Editar Estabelecimentos' } },
      { path: 'Cadastrar-Usuario', component: CriarContaComponent, data: { title: 'Cadastrar Usuário' } },
      { path: 'Estabelecimentos-Cliente/:id', component: EstabelecimentosClienteComponent, data: { title: 'Estabelecimentos' } },
      { path: 'Estabelecimentos-Cliente-Editar/:id', component: EstabelecimentoClienteEditarComponent, data: { title: 'Editar Estabelecimentos' } },
      { path: 'Estabelecimentos-Cliente-Criar', component: EstabelecimentoClienteCriarComponent, data: { title: 'Criar Estabelecimentos' } }

    ],
    canActivate: [AuthGuard]

  },


  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'Home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'Login', component: LoginComponent, data: { title: 'Efetuar Login' } },
  { path: 'Contato', component: ContatoComponent, data: { title: 'Contato' } },
  { path: 'SobreNos', component: SobreNosComponent, data: { title: 'Sobre Nós' } },
  { path: 'Estabelecimentos-Home', component: ListarEstabelecimentosHomeComponent, data: { title: 'Listar Estabelecimentos' } },
  { path: 'Detalhar-Estabelecimentos/:id', component: DetalharEstabelecimentoComponent, data: { title: 'Detalhar estabelecimento' } }

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
