import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Message } from '@nestjs/microservices/external/kafka.interface';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app.config';

@Injectable()
export class ProducerService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(Constants.kafkaClientToken)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('get-food-type');
    await this.kafkaClient.connect();
  }
  getHello(): Subscription {
    const date = Date.now();
    const messageContent = JSON.stringify({
      type: 'CatFood',
      amount: '12300',
    });
    const test = this.sendMessage('get-food-type', {
      key: Math.random() + '',
      value: messageContent,
    }).subscribe((reply) => {
      const dateReply = Date.now();
      console.log('Tempo até reply:', dateReply - date);
      console.log('Conteúdo do reply:', reply);
    });
    return test;
  }
  async onModuleDestroy() {
    await this.kafkaClient.close();
  }
  sendMessage(topic: string, message: Message) {
    return this.kafkaClient.send(topic, message);
  }

  sendMessages(topic: string, messages: Message[]) {
    return this.kafkaClient.send(topic, messages);
  }
}
