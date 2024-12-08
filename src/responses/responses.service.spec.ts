import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ResponsesService } from './responses.service';
import { Response } from './models/responses.schema';

describe('ResponsesService', () => {
  let service: ResponsesService;

  const mockResponseModel = {
    save: jest.fn(),
    find: jest.fn().mockReturnThis(),
    exec: jest.fn(),
    findById: jest.fn().mockReturnThis(),
    findByIdAndDelete: jest.fn().mockReturnThis(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResponsesService,
        {
          provide: getModelToken(Response.name),
          useValue: mockResponseModel,
        },
      ],
    }).compile();

    service = module.get<ResponsesService>(ResponsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a response', async () => {
    const dto = {
      userId: 'user123',
      quizId: 'quiz456',
      answers: [
        { questionId: 'q1', selectedAnswer: 'A', correctAnswer: 'B' },
      ],
      score: 80,
    };
    mockResponseModel.save.mockResolvedValue(dto);
    const result = await service.submitResponse(dto);
    expect(result).toEqual(dto);
  });

  it('should find all responses for a quiz', async () => {
    const quizId = 'quiz456';
    await service.getResponsesByQuizId(quizId);
    expect(mockResponseModel.find).toHaveBeenCalledWith({ quizId });
  });

  it('should find a response by id', async () => {
    const id = '123';
    await service.getResponseById(id);
    expect(mockResponseModel.findById).toHaveBeenCalledWith(id);
  });

  it('should delete a response', async () => {
    const id = '123';
    await service.deleteResponse(id);
    expect(mockResponseModel.findByIdAndDelete).toHaveBeenCalledWith(id);
  });
});
