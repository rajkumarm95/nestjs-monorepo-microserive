import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreManagementService {
  getStore(data: string): string {
    return data;
  }
}
