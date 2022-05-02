import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// @Module({
//   controllers: [CatsController],
//   providers: [CatsService],
//   exports: [CatsService],
// })
export class CatsModule {
  name: string;
  age: number;
  breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
