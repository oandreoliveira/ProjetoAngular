import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CategoriaDTO } from './categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private prismaService: PrismaService) {}

  async buscarCategoriaPorNome(nome: string) {
    return this.prismaService.categoria.findFirst({
      where: {
        nome,
      },
    });
  }

  async criarCategoria(data: CategoriaDTO) {
    const categoria = await this.buscarCategoriaPorNome(data.nome);

    if (categoria && categoria.isAtivo) {
      throw new HttpException('Categoria já existe!', HttpStatus.CONFLICT);
    } else if (categoria && !categoria.isAtivo) {
      this.prismaService.categoria.update({
        where: {
          id: categoria.id,
        },
        data: {
          isAtivo: true,
        },
      });
    }

    return this.prismaService.categoria.create({
      data,
    });
  }

  async buscarTodasCategorias() {
    return this.prismaService.categoria.findMany({
      where: {
        isAtivo: true,
      },
    });
  }

  async buscarCategoriaPorId(id: string) {
    const categoria = this.prismaService.categoria.findFirst({
      where: {
        id,
        AND: {
          isAtivo: true,
        },
      },
    });

    if (categoria) {
      return categoria;
    }

    throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
  }

  async alterarCategoria(id: string, data: CategoriaDTO) {
    const categoria = await this.buscarCategoriaPorId(id);
    if (categoria) {
      return this.prismaService.categoria.update({
        where: {
          id,
        },
        data,
      });
    }
  }

  async deletarCategoria(id: string) {
    const categoria = await this.buscarCategoriaPorId(id);
    if (categoria) {
      return this.prismaService.categoria.update({
        where: {
          id,
        },
        data: {
          isAtivo: false,
        },
      });
    }
  }
}
