import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class Log extends Logger {
  // you can override the log(), error(), warn(), debug(), and verbose() methods if needed
}
