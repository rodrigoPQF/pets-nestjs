import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Constants, KafkaConfig } from './app.config';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { FoodConsumerController } from './food/food.controller';
import { NutritionController } from './nutrition/nutrition.controller';
import { ValidalgumacoisaController } from './validalgumacoisa/validalgumacoisa.controller';

const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);
kafkaImport.global = true;
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    kafkaImport,
    ConsumerModule,
  ],
  // controllers: [
  //   FoodConsumerController,
  //   NutritionController,
  //   ValidalgumacoisaController,
  // ],
  providers: [AppService],
})
export class AppModule {}
