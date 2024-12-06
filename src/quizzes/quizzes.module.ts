import { Module } from '@nestjs/common';
import { QuizzesSchema } from './models/quizzes.schema';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Quiz',schema:QuizzesSchema}])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
  exports: [QuizzesService, MongooseModule]
})

export class QuizzesModule {}