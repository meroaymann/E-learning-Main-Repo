import { Module } from '@nestjs/common';
import { ProgressSchema } from './models/progress.schema';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Progress',schema:ProgressSchema}])],
  controllers: [ProgressController],
  providers: [ProgressService],
  exports: [ProgressService, MongooseModule]
})

export class ProgressModule {}