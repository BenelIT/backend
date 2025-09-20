import { Test, TestingModule } from '@nestjs/testing';
import { RatiosController } from './ratios.controller';

describe('RatiosController', () => {
  let controller: RatiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatiosController],
    }).compile();

    controller = module.get<RatiosController>(RatiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
