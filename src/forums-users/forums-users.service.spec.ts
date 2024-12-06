import { Test, TestingModule } from '@nestjs/testing';
import { ForumsUsersService } from './forums-users.service';

describe('ForumsUsersService', () => {
  let service: ForumsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumsUsersService],
    }).compile();

    service = module.get<ForumsUsersService>(ForumsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
