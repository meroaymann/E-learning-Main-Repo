import { Module } from '@nestjs/common';
import { QuestionBankAnswersSchema } from './models/question-bank-answers.schema';
import { QuestionBankAnswersController } from './question-bank-answers.controller'; 
import { QuestionBankAnswersService } from './question-bank-answers.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'QuestionBankAnswer',schema:QuestionBankAnswersSchema}])],
  providers: [QuestionBankAnswersService],
  controllers: [QuestionBankAnswersController],
  exports: [QuestionBankAnswersService, MongooseModule]
})

export class QuestionBankAnswersModule {}