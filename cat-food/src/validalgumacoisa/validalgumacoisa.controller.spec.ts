import { Test, TestingModule } from '@nestjs/testing';
import { ValidalgumacoisaController } from './validalgumacoisa.controller';

describe('ValidalgumacoisaController', () => {
  let controller: ValidalgumacoisaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidalgumacoisaController],
    }).compile();

    controller = module.get<ValidalgumacoisaController>(
      ValidalgumacoisaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
