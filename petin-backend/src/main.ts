import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Petin-Backend')
  .setDescription('API desenvolvida para gerenciamento de estabelecimentos PetFriendly')
  .setVersion('1.0')
  .addTag('categorias')
  .addTag('estabelecimentos')
  .addTag('clientes')
  .addTag('usuario')
  .addTag('login')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
