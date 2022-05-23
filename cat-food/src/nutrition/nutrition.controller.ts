import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NutritionController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('valida_alguma_coisa');
  }

  @MessagePattern('get-cats')
  consumePayment(@Payload() message) {
    console.log(message.value);
    this.clientKafka
      .send('valida_alguma_coisa', JSON.stringify({ key1: 'val1' }))
      .subscribe((reply) => console.log(reply));
  }
}
