import { Module } from '@nestjs/common';
import { CoursesSchema } from './models/courses.schema';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Course',schema:CoursesSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService, MongooseModule]
})

export class CoursesModule {}