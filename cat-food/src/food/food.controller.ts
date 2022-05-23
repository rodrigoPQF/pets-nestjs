import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller('foodConsumer')
export class FoodConsumerController implements OnModuleInit {
  private kafkaProducer: Producer;
  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }
  @Get()
  async getCat() {
    const result = await this.kafkaProducer.send({
      topic: 'get-cats',
      messages: [
        {
          key: Math.random() + '',
          value: JSON.stringify({ name: 'SrNeldon', raca: 'Viralata' }),
        },
      ],
    });
  }
}
