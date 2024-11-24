import { Module } from '@nestjs/common';
import { AuthenticationLogsController } from './authentication-logs.controller';
import { AuthenticationLogsService } from './authentication-logs.service';
import { AuthenticationLogsSchema } from './models/authlogs.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [MongooseModule.forFeature([{name:'authentication-logs',schema:AuthenticationLogsSchema}])],
  controllers: [AuthenticationLogsController],
  providers: [AuthenticationLogsService]
})

export class AuthenticationLogsModule {}