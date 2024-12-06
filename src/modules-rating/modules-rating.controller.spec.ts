import { Test, TestingModule } from '@nestjs/testing';
import { ModulesRatingController } from './modules-rating.controller';

describe('ModulesRatingController', () => {
  let controller: ModulesRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulesRatingController],
    }).compile();

    controller = module.get<ModulesRatingController>(ModulesRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
