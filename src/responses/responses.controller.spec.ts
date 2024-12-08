import { Test, TestingModule } from '@nestjs/testing';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';

describe('ResponsesController', () => {
  let controller: ResponsesController;
  let service: ResponsesService;

  const mockService = {
    submitResponse: jest.fn(),
    getResponsesByQuizId: jest.fn(),
    getResponseById: jest.fn(),
    deleteResponse: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsesController],
      providers: [
        {
          provide: ResponsesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ResponsesController>(ResponsesController);
    service = module.get<ResponsesService>(ResponsesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call submitResponse on service with correct data', async () => {
    const dto = {
      userId: 'user123',
      answers: [
        { questionId: 'q1', selectedAnswer: 'A', correctAnswer: 'B' },
      ],
      score: 80,
    };
    const quizId = 'quiz456';
    await controller.submitResponse(quizId, dto);
    expect(mockService.submitResponse).toHaveBeenCalledWith({
      ...dto,
      quizId,
    });
  });

  it('should call getResponsesByQuizId on service', async () => {
    const quizId = 'quiz456';
    await controller.getResponsesByQuizId(quizId);
    expect(mockService.getResponsesByQuizId).toHaveBeenCalledWith(quizId);
  });

  it('should call getResponseById on service with correct id', async () => {
    const id = '123';
    await controller.getResponseById(id);
    expect(mockService.getResponseById).toHaveBeenCalledWith(id);
  });

  it('should call deleteResponse on service with correct id', async () => {
    const id = '123';
    await controller.deleteResponse(id);
    expect(mockService.deleteResponse).toHaveBeenCalledWith(id);
  });
});
