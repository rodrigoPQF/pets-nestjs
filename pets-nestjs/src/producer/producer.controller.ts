import { Controller, Get, Post } from '@nestjs/common';
import { Subscription } from 'rxjs';
import { ProducerService } from './producer.service';

@Controller('/prod/send')
export class ProducerController {
  constructor(private readonly prodService: ProducerService) {}

  @Post()
  getHello(): Subscription {
    return this.prodService.getHello();
  }
}
