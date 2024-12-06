import { Module } from '@nestjs/common';
import { ModulesSchema } from '../modules/models/modules.schema';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Module',schema:ModulesSchema}])],
  controllers: [ModulesController],
  providers: [ModulesService],
  exports: [ModulesService, MongooseModule]
})

export class ModulesModule {}