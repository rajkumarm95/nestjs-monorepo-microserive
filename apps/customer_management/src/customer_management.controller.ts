import { Controller, Get } from '@nestjs/common';
import { CustomerManagementService } from './customer_management.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class CustomerManagementController {
  constructor(
    private readonly customerManagementService: CustomerManagementService,
  ) {}

  @EventPattern('customer-pattern')
  getHello(data) {
    console.log(data);
  }
}
