import { Test, TestingModule } from '@nestjs/testing';
import { ModulesRatingService } from './modules-rating.service';

describe('ModulesRatingService', () => {
  let service: ModulesRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulesRatingService],
    }).compile();

    service = module.get<ModulesRatingService>(ModulesRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
