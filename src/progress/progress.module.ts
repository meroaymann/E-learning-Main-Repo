import { Module } from '@nestjs/common';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { ProgressSchema } from './models/progress.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'progress',schema:ProgressSchema}])],
  controllers: [ProgressController],
  providers: [ProgressService]
})

export class ProgressModule {}