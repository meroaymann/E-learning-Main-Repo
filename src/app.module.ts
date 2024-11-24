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
import { MongooseModule } from '@nestjs/mongoose';
import { Module, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Module({
  imports: [
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
    MongooseModule.forRoot('mongodb://localhost:27017/E-learning')],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements OnModuleInit {
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('AppModule initialized');
  }
}
