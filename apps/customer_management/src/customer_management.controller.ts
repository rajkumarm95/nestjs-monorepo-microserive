import { Controller } from '@nestjs/common';
import { CustomerManagementService } from './customer_management.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class CustomerManagementController {
  constructor(
    private readonly customerManagementService: CustomerManagementService
  ) {}

  @EventPattern({ ctx: 'customer-pattern' })
  getCustomer(data: string): string {
    return this.customerManagementService.getCustomer(data);
  }

  @MessagePattern({ pattern: 'customer-pattern2' })
  postCustomer(data: unknown) {
    return this.customerManagementService.postCustomer(data);
  }
}
