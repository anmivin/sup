import { AppModule } from '@back/app.module';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import cookieParser from 'cookie-parser';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );
  /* 
  app.useGlobalGuards(new JwtAuthGuard()); */
  const config = new DocumentBuilder()
    .setTitle('sup Swagger')
    .setDescription('sup API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
