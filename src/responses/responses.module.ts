import { Module } from '@nestjs/common';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { ResponsesSchema } from '../responses/models/responses.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'responses',schema:ResponsesSchema}])],
  controllers: [ResponsesController],
  providers: [ResponsesService]
})

export class ResponsesModule {}