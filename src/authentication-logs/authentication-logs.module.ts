import { Module } from '@nestjs/common';
import { AuthenticationLogsSchema } from './models/authlogs.schema';
import { AuthenticationLogsController } from './authentication-logs.controller';
import { AuthenticationLogsService } from './authentication-logs.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [MongooseModule.forFeature([{name:'AuthenticationLog',schema:AuthenticationLogsSchema}])],
  controllers: [AuthenticationLogsController],
  providers: [AuthenticationLogsService],
  exports: [AuthenticationLogsService, MongooseModule]
})

export class AuthenticationLogsModule {}