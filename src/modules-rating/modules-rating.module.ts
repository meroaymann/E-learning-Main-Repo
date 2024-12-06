import { Module } from '@nestjs/common';
import { ModuleRatingSchema } from './models/modules-rating.schema';
import { ModulesRatingController } from './modules-rating.controller';
import { ModulesRatingService } from './modules-rating.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'ModuleRating',schema:ModuleRatingSchema}])],
  controllers: [ModulesRatingController],
  providers: [ModulesRatingService],
  exports: [ModulesRatingService, MongooseModule]
})

export class ModulesRatingModule {}