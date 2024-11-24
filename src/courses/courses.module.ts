import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CoursesSchema } from './models/courses.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'courses',schema:CoursesSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService]
})

export class CoursesModule {}