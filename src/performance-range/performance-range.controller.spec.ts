import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceRangeController } from './performance-range.controller';

describe('PerformanceRangeController', () => {
  let controller: PerformanceRangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceRangeController],
    }).compile();

    controller = module.get<PerformanceRangeController>(PerformanceRangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
