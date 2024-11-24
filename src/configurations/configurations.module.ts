import { Module } from '@nestjs/common';
import { ConfigurationsController } from './configurations.controller';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsSchema } from './models/configs.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [MongooseModule.forFeature([{name:'configurations',schema:ConfigurationsSchema}])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService]
})
export class ConfigurationsModule {}