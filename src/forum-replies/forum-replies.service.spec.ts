import { Test, TestingModule } from '@nestjs/testing';
import { ForumRepliesService } from './forum-replies.service';

describe('ForumRepliesService', () => {
  let service: ForumRepliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumRepliesService],
    }).compile();

    service = module.get<ForumRepliesService>(ForumRepliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
