import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { ClienteService } from './cliente.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('clientes')
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async criarCliente(@Body() data: ClienteDTO) {
    return this.clienteService.criar(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listarTodos() {
    return this.clienteService.listarTodosClientes();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async buscarClientePorID(@Param('id') id: string) {
    return this.clienteService.buscarClientePorID(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async alterarCliente(@Param('id') id: string, @Body() data: ClienteDTO) {
    return this.clienteService.alterarCliente(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async deletarCliente(@Param('id') id: string) {
    return this.clienteService.deletarCliente(id);
  }
}
