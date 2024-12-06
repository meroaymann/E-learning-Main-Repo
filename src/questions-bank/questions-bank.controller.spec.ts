import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsBankController } from './questions-bank.controller';

describe('QuestionsBankController', () => {
  let controller: QuestionsBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsBankController],
    }).compile();

    controller = module.get<QuestionsBankController>(QuestionsBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
