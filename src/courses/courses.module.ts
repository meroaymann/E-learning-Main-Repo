import { Module } from '@nestjs/common';
import { CoursesSchema } from './models/courses.schema';
import { CourseController } from './courses.controller';
import { CourseService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Course',schema:CoursesSchema}])],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService, MongooseModule]
})

export class CoursesModule {}