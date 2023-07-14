import { NestFactory } from '@nestjs/core';
import { StoreManagementModule } from './store_management.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('StoreManagement');
  const app = await NestFactory.createMicroservice(StoreManagementModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.SHOP_MANAGEMENT_PORT || 'localhost',
      port: process.env.SERVER_HOST || 3001,
    },
  });
  await app.listen().then(() => {
    logger.log(
      `🛍️ Store Management Service is running on port ${
        process.env.SERVER_HOST || 'localhost'
      }:${process.env.SHOP_MANAGEMENT_PORT || 3001}`
    );
  });
}
bootstrap();
