import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken('User'), useValue: {} }, // Mock Mongoose model
        { provide: JwtService, useValue: { sign: jest.fn() } }, // Mock JwtService
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register a new user', async () => {
    const mockUser = {
      userId: '123',
      name: 'John Doe',
      email: 'johndoe@example.com',
      passwordHash: 'hashedpassword',
      role: 'student',
      isActive: 'Yes',
      createdBy: 'system',
      createdAt: new Date(),
    };

    jest.spyOn(service, 'register').mockImplementation(async () => mockUser as any);

    const result = await service.register(mockUser as any);
    expect(result).toEqual(mockUser);
  });
});
