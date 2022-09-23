import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioDTO } from './usuario.dto';
import { UsuarioService } from './usuario.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async cadastrarUsuario(@Body() data: UsuarioDTO){
    return this.usuarioService.cadastrarUsuario(data);
  }
}
