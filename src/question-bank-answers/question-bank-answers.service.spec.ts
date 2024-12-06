import { Test, TestingModule } from '@nestjs/testing';
import { QuestionBankAnswersService } from './question-bank-answers.service';

describe('QuestionBankAnswersService', () => {
  let service: QuestionBankAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionBankAnswersService],
    }).compile();

    service = module.get<QuestionBankAnswersService>(QuestionBankAnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
