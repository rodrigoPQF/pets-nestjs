import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect('This action returns all cats');
  });

  it('/ (GET)', async () => {
    request(app.getHttpServer()).get('/dogs').send('Doginho 1234');
    const res = await request(app.getHttpServer()).get('/');
    expect(res.body).toEqual('This action returns all dogs Doginho 1234');
  });
});
