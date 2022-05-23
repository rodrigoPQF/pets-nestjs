import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('/food/buy')
export class ConsumerController {
  @MessagePattern('get-food-type')
  @Get()
  async getHello(@Payload() message) {
    console.log('Seu tipo de comida é ,', message.value);

    return 'Concluiu';
  }
}
