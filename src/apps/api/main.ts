import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from '../../shared/configurations/configs/app';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('App');

  const appConfig = app.get(AppConfig);

  await app.listen(appConfig.port, '0.0.0.0', async () =>
    logger.log(`App "API" successfully started on ${await app.getUrl()}`),
  );
}
bootstrap();
