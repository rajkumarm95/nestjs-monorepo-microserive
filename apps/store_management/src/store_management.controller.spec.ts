import { Test, TestingModule } from '@nestjs/testing';
import { StoreManagementController } from './store_management.controller';
import { StoreManagementService } from './store_management.service';

describe('StoreManagementController', () => {
  let storeManagementController: StoreManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StoreManagementController],
      providers: [StoreManagementService],
    }).compile();

    storeManagementController = app.get<StoreManagementController>(StoreManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(storeManagementController.getHello()).toBe('Hello World!');
    });
  });
});
