import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Body } from '@nestjs/common/decorators';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req: any, @Body() authDTO: AuthDTO){
    return this.authService.login(req.user);
  }
}
