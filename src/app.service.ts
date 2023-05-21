import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api rest to manage notes! by: @ccmendezt in GitHub';
  }
}
