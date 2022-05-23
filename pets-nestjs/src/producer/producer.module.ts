import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';

@Module({
  providers: [ProducerService],
  controllers: [ProducerController],
})
export class ProducerModule {}
