import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Log } from '../../../logger';

async function bootstrap() {
  const logger = new Log('api-gateway');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_GATEWAY_PORT || 3000, () =>
    logger.log(
      `🚀 API Gateway is running on port ${
        process.env.SERVER_HOST || 'localhost'
      }:${process.env.API_GATEWAY_PORT || 3000}`
    )
  );
}
bootstrap();
