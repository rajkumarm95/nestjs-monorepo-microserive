import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('STORE_MANAGEMENT') private store: ClientProxy,
    @Inject('CUSTOMER_MANAGEMENT') private customer: ClientProxy,
  ) {}

  @Get()
  getHello() {
    return this.store.send('getProducts', 'Hello World!');
  }

  @Get('customer')
  getCustomer() {
    return this.customer.emit('customer-pattern', 'Hello customer!');
  }

  @Post('customer2/:id')
  getCustomer2(
    @Body() body: any,
    @Param('id') Param: any,
    @Query() query: any,
  ) {
    return this.customer.send('customer-pattern', { body, Param, query });
  }
}
