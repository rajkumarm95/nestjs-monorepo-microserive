import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { Log } from '../../../logger';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STORE_MANAGEMENT',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3001 },
      },
      {
        name: 'CUSTOMER_MANAGEMENT',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3002 },
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Log,
      useClass: Log,
    },
  ],
  exports: [Log],
})
export class AppModule {}
