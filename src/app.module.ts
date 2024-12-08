import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { ResponsesModule } from './responses/responses.module';
import { ProgressModule } from './progress/progress.module';
import { NotesModule } from './notes/notes.module';
import { AuthenticationLogsModule } from './authentication-logs/authentication-logs.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { ModulesRatingModule } from './modules-rating/modules-rating.module';
import { PerformanceRangeModule } from './performance-range/performance-range.module';
import { QuestionsBankModule } from './questions-bank/questions-bank.module';
import { QuestionBankAnswersModule } from './question-bank-answers/question-bank-answers.module';
import { QuizQuestionsModule } from './quiz-questions/quiz-questions.module';
import { ForumsModule } from './forums/forums.module';
import { ForumRepliesModule } from './forum-replies/forum-replies.module';
import { ForumsUsersModule } from './forums-users/forums-users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
    AuthModule,
    UsersModule,
    CoursesModule,
    ModulesModule,
    QuizzesModule,
    ResponsesModule,
    ProgressModule,
    NotesModule,
    AuthenticationLogsModule,
    ConfigurationsModule,
    ModulesRatingModule,
    PerformanceRangeModule,
    QuestionsBankModule,
    QuestionBankAnswersModule,
    QuizQuestionsModule,
    ForumsModule,
    ForumRepliesModule,
    ForumsUsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/E-learning')],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule], // Ensure this exports the model
})

export class AppModule implements OnModuleInit {
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('AppModule initialized');
  }
}