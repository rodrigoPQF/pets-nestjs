import { NestFactory } from '@nestjs/core';
import { KafkaConfig } from './app.config';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    KafkaConfig(),
  );

  await app.listen();
}
bootstrap();
