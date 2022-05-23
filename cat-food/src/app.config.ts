import {
  ClientProviderOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

export const KafkaConfig = (
  name?: string,
): MicroserviceOptions & ClientProviderOptions => {
  return {
    ...(name && { name }),
    transport: Transport.KAFKA,
    options: {
      retryAttempts: 10,
      client: {
        brokers: ['localhost:9094'],
      },
      consumer: {
        groupId: 'my-consumer-' + Math.random(),
        heartbeatInterval: 1000,
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  };
};

export enum Constants {
  KafkaClientToken = 'KAFKA_CLIENT',
}
