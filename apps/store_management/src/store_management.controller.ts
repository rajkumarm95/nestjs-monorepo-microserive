import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StoreManagementService } from './store_management.service';

@Controller()
export class StoreManagementController {
  constructor(
    private readonly storeManagementService: StoreManagementService
  ) {}

  @MessagePattern('getProducts')
  getStore(data: string): string {
    return this.storeManagementService.getStore(data);
  }
}
