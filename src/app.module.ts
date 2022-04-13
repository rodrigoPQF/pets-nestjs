import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [DogsController, CatsController],
  providers: [DogsService, CatsService],
})
export class AppModule {}
