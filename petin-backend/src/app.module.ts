import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './modules/filters/exception.filter';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstabelecimentoModule } from './modules/estabelecimento/estabelecimento.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [
    AuthModule, ClienteModule, EstabelecimentoModule, CategoriaModule, UsuarioModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }, AppService],
})
export class AppModule { }
