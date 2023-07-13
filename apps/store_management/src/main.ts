import { NestFactory } from '@nestjs/core';
import { StoreManagementModule } from './store_management.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(StoreManagementModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  });
  await app.listen().then(() => {
    console.log('🛍️ Store Management Service is running on port 3001');
  });
}
bootstrap();
