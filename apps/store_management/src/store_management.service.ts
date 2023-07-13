import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
