import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from '../../shared/configurations/configs/app';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cars example')
    .setDescription('The cars API description')
    .setVersion('1.0.0')
    .addTag('cars')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/reference',
    apiReference({
      theme: 'purple',
      spec: {
        content: document,
      },
    }),
  );

  const logger = new Logger('App');

  const appConfig = app.get(AppConfig);

  await app.listen(appConfig.port, '0.0.0.0', async () =>
    logger.log(`App "API" successfully started on ${await app.getUrl()}`),
  );
}
bootstrap();
