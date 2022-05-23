import {
  MicroserviceOptions,
  ClientProviderOptions,
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
        brokers: ['host.docker.internal:9094'],
      },
    },
  };
};
export enum Constants {
  KafkaClientToken = 'KAFKA_CLIENT',
}
