import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { Constants, KafkaConfig } from './app.config';
import { CatsModule } from './cats/cats.module';
import { ProducerModule } from './producer/producer.module';

const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);

kafkaImport.global = true;
@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    kafkaImport,
    ProducerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
