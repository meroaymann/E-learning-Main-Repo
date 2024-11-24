import { Module } from '@nestjs/common';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';
import { ModulesSchema } from '../modules/models/modules.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'modules',schema:ModulesSchema}])],
  controllers: [ModulesController],
  providers: [ModulesService]
})

export class ModulesModule {}