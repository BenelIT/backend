import { Test, TestingModule } from '@nestjs/testing';
import { RatiosService } from './ratios.service';

describe('RatiosService', () => {
  let service: RatiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatiosService],
    }).compile();

    service = module.get<RatiosService>(RatiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
