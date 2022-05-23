import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { FoodConsumerController } from './food/food.controller';
import { NutritionController } from './nutrition/nutrition.controller';
import { ValidalgumacoisaController } from './validalgumacoisa/validalgumacoisa.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'my-consumer-' + Math.random(),
          },
        },
      },
    ]),
  ],
  controllers: [
    FoodConsumerController,
    NutritionController,
    ValidalgumacoisaController,
  ],
  providers: [AppService],
})
export class AppModule {}
