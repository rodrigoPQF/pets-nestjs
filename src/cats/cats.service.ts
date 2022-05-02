import { Injectable } from '@nestjs/common';
import { CatsModule } from './cats.module';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  cats: CatsModule[] = [
    new CatsModule('Flinn', 12, 'Manicoon'),
    new CatsModule('Blunaldo', 2, 'Manicoon'),
    new CatsModule('Roneld', 4, 'Vira-lata'),
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  find(id: number): Cat {
    return this.cats[id];
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(cat: Cat): Cat {
    return cat;
  }

  delete(id: number) {
    this.cats.pop();
  }
}
