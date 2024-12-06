import { Module } from '@nestjs/common';
import { QuizQuestionsSchema } from './models/quiz-questions.schema';
import { QuizQuestionsController } from './quiz-questions.controller';
import { QuizQuestionsService } from './quiz-questions.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'QuizQuestion',schema:QuizQuestionsSchema}])],
  controllers: [QuizQuestionsController],
  providers: [QuizQuestionsService],
  exports: [QuizQuestionsService, MongooseModule]
})

export class QuizQuestionsModule {}