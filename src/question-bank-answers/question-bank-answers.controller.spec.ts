import { Test, TestingModule } from '@nestjs/testing';
import { QuestionBankAnswersController } from './question-bank-answers.controller';

describe('QuestionBankAnswersController', () => {
  let controller: QuestionBankAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionBankAnswersController],
    }).compile();

    controller = module.get<QuestionBankAnswersController>(QuestionBankAnswersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
