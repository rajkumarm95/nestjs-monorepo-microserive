import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStore(): Observable<string> {
    return this.appService.getStore();
  }

  @Get('customer')
  getCustomer(): Observable<string> {
    const pattern = { ctx: 'customer-pattern' };
    return this.appService.getCustomer(pattern);
  }

  @Post('customer/:id')
  postCustomer(
    @Body() body: unknown,
    @Param('id') param: unknown,
    @Query() query: unknown
  ): Observable<void> {
    const pattern = { pattern: 'customer-pattern2' };
    return this.appService.postCustomer(pattern, body, param, query);
  }
}
