import { Module } from '@nestjs/common';
import { QuizzesSchema } from './models/quizzes.schema';
import { QuizController } from './quizzes.controller';
import { QuizService } from './quizzes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Quiz',schema:QuizzesSchema}])],
  controllers: [QuizController],
  providers: [QuizService],
  exports: [QuizService, MongooseModule]
})

export class QuizzesModule {}