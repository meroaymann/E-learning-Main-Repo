import { Test, TestingModule } from '@nestjs/testing';
import { ForumRepliesController } from './forum-replies.controller';

describe('ForumRepliesController', () => {
  let controller: ForumRepliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumRepliesController],
    }).compile();

    controller = module.get<ForumRepliesController>(ForumRepliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
