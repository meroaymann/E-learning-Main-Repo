import { Module } from '@nestjs/common';
import { ModulesSchema } from '../modules/models/modules.schema';
import { ModuleController } from './modules.controller';
import { ModuleService } from './modules.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Module',schema:ModulesSchema}])],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [ModuleService, MongooseModule]
})

export class ModulesModule {}