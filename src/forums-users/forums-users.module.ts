import { Module } from '@nestjs/common';
import { ForumsUsersSchema } from './models/forums-users.schema';
import { ForumsUsersController } from './forums-users.controller';
import { ForumsUsersService } from './forums-users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'ForumUser',schema:ForumsUsersSchema}])],
  controllers: [ForumsUsersController],
  providers: [ForumsUsersService],
  exports: [ForumsUsersService, MongooseModule]
})

export class ForumsUsersModule {}