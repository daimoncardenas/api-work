import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  // Serve static files from the public directory
  app.useStaticAssets(join(__dirname, '..', 'public'));


  const config = new DocumentBuilder()
    .setTitle('ONSPOT API PUBLIC')
    .setDescription('Information of endpoints for ONSPOT API PUBLIC')
    .setVersion('1.0.0')
    .addTag('Endpoints')
    .addApiKey({
      type: 'apiKey',
      name: 'X-API-KEY',
      in: 'header',
      description: 'API Key for ONSPOT API',
    }, 'X-API-KEY') // Add this line
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen(3000);
}
bootstrap();
