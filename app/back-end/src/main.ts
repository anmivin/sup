import { AppModule } from '@back/app.module';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/* import * as cookieParser from 'cookie-parser'; */
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );
  /*   app.use(cookieParser.default()); */
  /*   app.useGlobalGuards(new JwtAuthGuard()); */
  const config = new DocumentBuilder()
    .setTitle('s4ug Swagger')
    .setDescription('s4ug API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
