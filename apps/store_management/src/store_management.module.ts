import { Module } from '@nestjs/common';
import { StoreManagementController } from './store_management.controller';
import { StoreManagementService } from './store_management.service';

@Module({
  imports: [],
  controllers: [StoreManagementController],
  providers: [StoreManagementService],
})
export class StoreManagementModule {}
