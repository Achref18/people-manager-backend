import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeExceptionFactory } from 'utils/format.validation-pipe';
import { ConfigService } from '@nestjs/config';
import { envConstants } from '@config/env.constant';
import { splitString } from 'utils/splitString';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: splitString(configService.get<string>(envConstants.ORIGIN), ','),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: validationPipeExceptionFactory,
      stopAtFirstError: false,
    }),
  );

  await app.listen(configService.get<number>(envConstants.PORT) || 3000);
}
bootstrap();
