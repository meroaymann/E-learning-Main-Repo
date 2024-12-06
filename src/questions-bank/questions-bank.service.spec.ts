import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsBankService } from './questions-bank.service';

describe('QuestionsBankService', () => {
  let service: QuestionsBankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsBankService],
    }).compile();

    service = module.get<QuestionsBankService>(QuestionsBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
