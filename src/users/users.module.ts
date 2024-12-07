import { Module } from '@nestjs/common';
import { UsersSchema } from '../users/models/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  controllers: [UsersController], // Define controller
  providers: [UsersService, JwtService], // Define service
  exports: [JwtService, UsersService, MongooseModule]
})

export class UsersModule {}