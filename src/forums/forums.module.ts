import { Module } from '@nestjs/common';
import { ForumsSchema } from './models/forums.schema';
import { ForumsController } from './forums.controller';
import { ForumsService } from './forums.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Forum',schema:ForumsSchema}])],
  controllers: [ForumsController],
  providers: [ForumsService],
  exports: [ForumsService, MongooseModule]
})

export class ForumsModule {}