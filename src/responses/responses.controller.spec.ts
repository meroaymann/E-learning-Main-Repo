import { Test, TestingModule } from '@nestjs/testing';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';

describe('ResponsesController', () => {
  let controller: ResponsesController;
  let service: ResponsesService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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

  it('should call create on service with correct data', async () => {
    const dto = {
      id: '1',
      userId: 'user123',
      quizId: 'quiz456',
      answers: [
        { questionId: 'q1', selectedAnswer: 'A', correctAnswer: 'B' },
      ],
      score: 80,
      submittedAt: new Date(),
    };
    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should call findAll on service', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call findOne on service with correct id', async () => {
    const id = '123';
    await controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should call update on service with correct id and data', async () => {
    const id = '123';
    const dto = {
      answers: [
        { questionId: 'q1', selectedAnswer: 'C', correctAnswer: 'C' },
      ],
      score: 90,
    };
    await controller.update(id, dto);
    expect(service.update).toHaveBeenCalledWith(id, dto);
  });

  it('should call remove on service with correct id', async () => {
    const id = '123';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
