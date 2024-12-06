import { Module } from '@nestjs/common';
import { ForumRepliesSchema } from 'src/forum-replies/models/forum-replies.schema';
import { ForumsUsersController } from './forums-users.controller';
import { ForumsUsersService } from './forums-users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'ForumUser',schema:ForumRepliesSchema}])],
  controllers: [ForumsUsersController],
  providers: [ForumsUsersService],
  exports: [ForumsUsersService, MongooseModule]
})

export class ForumsUsersModule {}