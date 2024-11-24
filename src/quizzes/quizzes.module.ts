import { Module } from '@nestjs/common';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';
import { QuizzesSchema } from './models/quizzes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'quizzes',schema:QuizzesSchema}])],
  controllers: [QuizzesController],
  providers: [QuizzesService]
})

export class QuizzesModule {}