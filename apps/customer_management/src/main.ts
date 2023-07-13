import { NestFactory } from '@nestjs/core';
import { CustomerManagementModule } from './customer_management.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CustomerManagementModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3002,
    },
  });
  await app.listen().then(() => {
    console.log('💁 Customer Management Service is running on port 3002');
  });
}
bootstrap();
