import { Module } from '@nestjs/common';
import { ConfigurationsSchema } from './models/configs.schema';
import { ConfigurationsController } from './configurations.controller';
import { ConfigurationsService } from './configurations.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [MongooseModule.forFeature([{name:'Configuration',schema:ConfigurationsSchema}])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService],
  exports: [ConfigurationsService, MongooseModule]
})

export class ConfigurationsModule {}