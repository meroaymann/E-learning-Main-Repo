import { Module } from '@nestjs/common';
import { PerformanceRangeSchema } from './models/performance-range.schema';
import { PerformanceRangeController } from './performance-range.controller';
import { PerformanceRangeService } from './performance-range.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'PerformanceRange',schema:PerformanceRangeSchema}])],
  controllers: [PerformanceRangeController],
  providers: [PerformanceRangeService],
  exports: [PerformanceRangeService, MongooseModule]
})

export class PerformanceRangeModule {}