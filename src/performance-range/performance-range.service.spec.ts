import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceRangeService } from './performance-range.service';

describe('PerformanceRangeService', () => {
  let service: PerformanceRangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceRangeService],
    }).compile();

    service = module.get<PerformanceRangeService>(PerformanceRangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
