import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { EstabelecimentoDTO } from './estabelecimento.dto';
import { EstabelecimentoService } from './estabelecimento.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('estabelecimentos')
@Controller('estabelecimento')
export class EstabelecimentoController {
  constructor(private readonly estabelecimentoService: EstabelecimentoService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async criarEstabelecimento(@Body() data: EstabelecimentoDTO) {
    return this.estabelecimentoService.criarEstabelecimento(data);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async listarTodosOsEstabelecimentos() {
    return this.estabelecimentoService.buscarTodosOsEstabelecimentos();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async buscarEstabelecimentosPorId(@Param("id") id: string) {
    return this.estabelecimentoService.buscarEstabelecimentoPorId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async alterarEstabelecimento(@Param("id") id: string, @Body() data: EstabelecimentoDTO) {
    return this.estabelecimentoService.alterarEstabelecimento(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async deletarEstabelecimento(@Param("id") id: string) {
    return this.estabelecimentoService.deletarEstabelecimento(id);
  }
}
