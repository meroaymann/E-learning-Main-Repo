import { Module } from '@nestjs/common';
import { QuestionsBankSchema } from './models/questions-bank.schema';
import { QuestionsBankController } from './questions-bank.controller';
import { QuestionsBankService } from './questions-bank.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'QuestionsBank',schema:QuestionsBankSchema}])],
  controllers: [QuestionsBankController],
  providers: [QuestionsBankService],
  exports: [QuestionsBankService, MongooseModule]
})

export class QuestionsBankModule {}