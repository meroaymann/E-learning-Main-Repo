import { Test, TestingModule } from '@nestjs/testing';
import { ForumsUsersController } from './forums-users.controller';

describe('ForumsUsersController', () => {
  let controller: ForumsUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumsUsersController],
    }).compile();

    controller = module.get<ForumsUsersController>(ForumsUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
