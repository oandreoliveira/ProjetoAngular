import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoriaDTO } from './categoria.dto';
import { CategoriaService } from './categoria.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('categorias')
@ApiBearerAuth()
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async criarCategoria(@Body() data: CategoriaDTO) {
    return this.categoriaService.criarCategoria(data);
  }

  @Get()
  async listarTodasCategorias() {
    return this.categoriaService.buscarTodasCategorias();
  }

  @Get(':id')
  async buscarCategoriaPorId(@Param('id') id: string) {
    return this.categoriaService.buscarCategoriaPorId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async alterarCategoria(@Param('id') id: string, @Body() data: CategoriaDTO) {
    return this.categoriaService.alterarCategoria(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async deletarCategoria(@Param('id') id: string) {
    return this.categoriaService.deletarCategoria(id);
  }
}
