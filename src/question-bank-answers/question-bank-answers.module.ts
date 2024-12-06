import { Module } from '@nestjs/common';
import { QuestionBankAnswersSchema } from './models/question-bank-answers.schema';
import { QuestionBankAnswerController } from './question-bank-answers.controller'; 
import { QuestionBankAnswerService } from './question-bank-answers.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'QuestionBankAnswer',schema:QuestionBankAnswersSchema}])],
  providers: [QuestionBankAnswerService],
  controllers: [QuestionBankAnswerController],
  exports: [QuestionBankAnswerService, MongooseModule]
})

export class QuestionBankAnswersModule {}