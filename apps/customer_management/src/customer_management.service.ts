import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerManagementService {
  // constructor() {}
  getCustomer(data: string): string {
    return data;
  }

  postCustomer(data: unknown) {
    return data;
  }
}
