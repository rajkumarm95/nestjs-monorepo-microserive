import { Module } from '@nestjs/common';
import { CustomerManagementController } from './customer_management.controller';
import { CustomerManagementService } from './customer_management.service';

@Module({
  imports: [],
  controllers: [CustomerManagementController],
  providers: [CustomerManagementService],
})
export class CustomerManagementModule {}
