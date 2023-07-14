import { NestFactory } from '@nestjs/core';
import { CustomerManagementModule } from './customer_management.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger: Logger = new Logger('CustomerManagement');
  const app = await NestFactory.createMicroservice(CustomerManagementModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.SERVER_HOST || 'localhost',
      port: process.env.CUSTOMER_MANAGEMENT_PORT || 3002,
    },
  });
  await app.listen().then(() => {
    logger.log(
      `💁 Customer Management Service is running on port ${
        process.env.SERVER_HOST || 'localhost'
      }:${process.env.CUSTOMER_MANAGEMENT_PORT || 3002}`
    );
  });
}
bootstrap();
