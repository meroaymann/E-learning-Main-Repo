import { Module } from '@nestjs/common';
import { ResponsesSchema } from '../responses/models/responses.schema';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Response',schema:ResponsesSchema}])],
  controllers: [ResponsesController],
  providers: [ResponsesService],
  exports: [ResponsesService, MongooseModule]
})

export class ResponsesModule {}