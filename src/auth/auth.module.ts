import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersSchema } from '../users/models/users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'users',schema:UsersSchema}])],
  controllers: [AuthController],
  providers: [AuthService]
})

export class AuthModule {}