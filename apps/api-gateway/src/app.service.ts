import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('STORE_MANAGEMENT') private store: ClientProxy,
    @Inject('CUSTOMER_MANAGEMENT') private customer: ClientProxy
  ) {}
  getStore(): Observable<string> {
    return this.store.send('getProducts', 'Hello store!');
  }

  getCustomer(pattern: Record<string, unknown>): Observable<string> {
    return this.customer.send(pattern, 'Hello customer!');
  }

  postCustomer(
    pattern: Record<string, unknown>,
    body: unknown,
    param: unknown,
    query: unknown
  ): Observable<void> {
    return this.customer.emit(pattern, { body, param, query });
  }
}
