import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Message } from '@nestjs/microservices/external/kafka.interface';
import { Constants } from 'src/app.config';

@Injectable()
export class ProducerService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(Constants.KafkaClientToken)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('get-cats');
    await this.kafkaClient.connect();

    const INTERVAL = 10000;

    setInterval(() => {
      const date = Date.now();
      const messageContent = JSON.stringify({ time: date, test: 'ok' });
      this.sendMessage('get-cats', {
        key: Math.random() + '',
        value: messageContent,
      }).subscribe((reply) => {
        const dateReply = Date.now();
        console.log('Tempo até reply:', dateReply - date);
        console.log('Conteúdo do reply:', reply);
      });
    }, INTERVAL);
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
