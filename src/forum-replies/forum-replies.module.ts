import { Module } from '@nestjs/common';
import { ForumRepliesSchema } from './models/forum-replies.schema';
import { ForumRepliesController } from './forum-replies.controller';
import { ForumRepliesService } from './forum-replies.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'ForumReply',schema:ForumRepliesSchema}])],
  controllers: [ForumRepliesController],
  providers: [ForumRepliesService],
  exports: [ForumRepliesService, MongooseModule]
})

export class ForumRepliesModule {}