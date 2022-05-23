import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  const catsService = {
    findAll: () => ['test'],
    findCats: () => [
      {
        id: 1,
        name: 32,
        age: 5,
        marked: false,
        createdAt: '2022-05-09T18:41:22.165Z',
        updatedAt: '2022-05-09T19:02:18.375Z',
      },
    ],
    create: () => [
      {
        name: 'rodrigo',
        age: 5,
        marked: false,
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST cats`, () => {
    return request(app.getHttpServer())
      .post('/cats')
      .expect(200)
      .expect(catsService.create());
  });

  afterAll(async () => {
    await app.close();
  });
});
