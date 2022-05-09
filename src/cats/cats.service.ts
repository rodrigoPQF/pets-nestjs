import { Inject, Injectable } from '@nestjs/common';
import { Cat } from './entity/cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }
}
