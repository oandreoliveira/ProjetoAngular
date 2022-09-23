import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Navegacao/menu/menu.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { FooterComponent } from './Navegacao/footer/footer.component';
import { LoginComponent } from './usuario/login/login.component';
import { ListarClientesComponent } from './Clientes/listar-clientes/listar-clientes.component';
import { ClientesService } from 'src/Service/clientes.service';
import { CriarClientesComponent } from './Clientes/criar-clientes/criar-clientes.component';
import { EditarClientesComponent } from './Clientes/editar-clientes/editar-clientes.component';
import { EditarCategoriasComponent } from './Categorias/editar-categorias/editar-categorias.component';
import { ListarCategoriasComponent } from './Categorias/listar-categorias/listar-categorias.component';
import { CriarCategoriasComponent } from './Categorias/criar-categorias/criar-categorias.component';
import { CategoriasService } from 'src/Service/categorias.service';
import { EditarEstabelecimentosComponent } from './Estabelecimentos/editar-estabelecimentos/editar-estabelecimentos.component';
import { ListarEstabelecimentosComponent } from './Estabelecimentos/listar-estabelecimentos/listar-estabelecimentos.component';
import { CriarEstabelecimentosComponent } from './Estabelecimentos/criar-estabelecimentos/criar-estabelecimentos.component';
import { EstabelecimentosService } from 'src/Service/estabelecimentos.service';
import { ListarEstabelecimentosHomeComponent } from './Estabelecimentos/listar-estabelecimentos-home/listar-estabelecimentos-home.component';
import { DetalharEstabelecimentoComponent } from './Estabelecimentos/detalhar-estabelecimento/detalhar-estabelecimento.component';
import { AreaAdministrativaComponent } from './Navegacao/area-administrativa/area-administrativa.component';
import { ContatoComponent } from './Navegacao/contato/contato.component';
import { SobreNosComponent } from './Navegacao/sobre-nos/sobre-nos.component';
import { CriarContaComponent } from './usuario/criar-conta/criar-conta.component';
import { ConteudoAdmComponent } from './Navegacao/conteudo-adm/conteudo-adm.component';
import { UsuarioService } from 'src/Service/usuario.service';
import { HttpInterceptorProviders } from './http-interceptors';
import { EstabelecimentosClienteComponent } from './Estabelecimentos/estabelecimentos-cliente/estabelecimentos-cliente.component';
import { EstabelecimentoClienteEditarComponent } from './Estabelecimentos/estabelecimento-cliente-editar/estabelecimento-cliente-editar.component';
import { EstabelecimentoClienteCriarComponent } from './Estabelecimentos/estabelecimento-cliente-criar/estabelecimento-cliente-criar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ListarClientesComponent,
    CriarClientesComponent,
    EditarClientesComponent,
    EditarCategoriasComponent,
    ListarCategoriasComponent,
    CriarCategoriasComponent,
    EditarEstabelecimentosComponent,
    ListarEstabelecimentosComponent,
    CriarEstabelecimentosComponent,
    ListarEstabelecimentosHomeComponent,
    DetalharEstabelecimentoComponent,
    AreaAdministrativaComponent,
    ContatoComponent,
    SobreNosComponent,
    CriarContaComponent,
    ConteudoAdmComponent,
    LoginComponent,
    EstabelecimentosClienteComponent,
    EstabelecimentoClienteEditarComponent,
    EstabelecimentoClienteCriarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


  ],
  providers: [
    ClientesService,
    CategoriasService,
    EstabelecimentosService,
    UsuarioService,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
