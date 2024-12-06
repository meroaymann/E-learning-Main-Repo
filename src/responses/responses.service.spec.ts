import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ResponsesService } from './responses.service';
import { Response } from './models/responses.schema';

describe('ResponsesService', () => {
  let service: ResponsesService;

  const mockResponseModel = {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
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
      id: '12345',
      userId: 'user123',
      quizId: 'quiz456',
      answers: [
        { questionId: 'q1', selectedAnswer: 'A', correctAnswer: 'B' },
      ],
      score: 80,
      submittedAt: new Date(),
    };
    await service.create(dto);
    expect(mockResponseModel.create).toHaveBeenCalledWith(dto);
  });

  it('should find all responses', async () => {
    await service.findAll();
    expect(mockResponseModel.find).toHaveBeenCalled();
  });

  it('should find a response by id', async () => {
    const id = '123';
    await service.findOne(id);
    expect(mockResponseModel.findById).toHaveBeenCalledWith(id);
  });

  it('should update a response', async () => {
    const id = '123';
    const dto = {
      answers: [
        { questionId: 'q1', selectedAnswer: 'C', correctAnswer: 'C' },
      ],
      score: 90,
    };
    await service.update(id, dto);
    expect(mockResponseModel.findByIdAndUpdate).toHaveBeenCalledWith(id, dto, { new: true });
  });

  it('should remove a response', async () => {
    const id = '123';
    await service.remove(id);
    expect(mockResponseModel.findByIdAndDelete).toHaveBeenCalledWith(id);
  });
});
