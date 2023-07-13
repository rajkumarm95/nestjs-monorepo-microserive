import { Controller, Get } from '@nestjs/common';
import { StoreManagementService } from './store_management.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StoreManagementController {
  // constructor() {}

  @MessagePattern('getProducts')
  getHello(data): string {
    return data;
  }
}
